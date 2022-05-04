import { eachDayOfInterval, format, getDay, isToday } from 'date-fns';
import express, { json } from 'express';
import DailyEntry from './models/DailyEntry';

import Habit from './models/Habit';

const app = express();

app.use(json());

// Habit
app.post("/habit", async (req, res) => {
    const {
        name, 
        repeteableAtTheseDaysOfWeek, 
        minimalCredit_condition,
        partialCredit_condition,
        fullCredit_condition
    } = req.body;

    const habit = Habit.build({
        name, 
        repeteableAtTheseDaysOfWeek, 
        minimalCredit_condition,
        partialCredit_condition,
        fullCredit_condition
    });
    
    await habit.save();
    
    res.status(201).json(habit);
})

app.get("/habit", async(req, res) => {
    const habits = await Habit.findAll();

    res.json(habits);
})

app.get("/habit/:id", async(req, res) => {
    const {id} = req.params;

    let habit = await Habit.findByPk(id);

    if(!habit){
        res.status(404).json("Not found.")
    } else {
        // Vezes que o hábito foi repetido desde a data de sua criação até hoje X 3

        
        // Como identificar entradas não criadas?
        // Com base da data criada ver quais seriam os dias que o hábito seria repedido
        // Comparar com as entradas feitas
        // Apenas ter o número

        let maxPossibleValue: number = 0;
        let actualValue: number = 0;

        const dateInterval = eachDayOfInterval({ 
            start: habit.createdAt, 
            end: Date.now() 
        })
        
        const repeteableAtTheseDaysOfWeek= habit.repeteableAtTheseDaysOfWeek;

        dateInterval.forEach(date => {
            const dayOfTheWeek = format(date, 'EEE');

            if(repeteableAtTheseDaysOfWeek.includes(dayOfTheWeek)){
                maxPossibleValue += 3;
            }
        })


        const entriesOfAnHabit = await DailyEntry.findAll({
            where: {
                habitId: id
            }
        })

        entriesOfAnHabit.forEach(entry => {
            if(entry.fullCredit_RequirementWasMet){
                actualValue += 3;
            } else if(entry.partialCredit_RequirementWasMet){
                actualValue += 2;
            } else {
                actualValue += 1;
            }
        })

        res.json(`${actualValue}/${maxPossibleValue}`);
    }
})


app.put("/habit/:id", async(req, res) => {
    const {id} = req.params;
    const {
        name, 
        repeteableAtTheseDaysOfWeek, 
        minimalCredit_condition,
        partialCredit_condition,
        fullCredit_condition
    } = req.body;

    let habit = await Habit.findByPk(id);

    if(!habit){
        res.status(404).json("Not found.")
    } else {
        await habit.update({
            name,
            repeteableAtTheseDaysOfWeek,
            minimalCredit_condition,
            partialCredit_condition,
            fullCredit_condition,
            updatedAt: Date.now()
        })

        await habit.save();
    
        res.json(habit);
    }

});

app.delete("/habit/:id", async(req, res) => {
    const {id} = req.params;

    let habit = await Habit.findByPk(id);

    if(!habit){
        res.status(404).json("Not found.")
    } else {
        await habit.destroy();
    
        res.status(200).json();
    }


});

// Daily entry
app.get("/daily-entry", async (req, res) => {
    /* 
    Pegar todos os hábitos
    tentar carregar entrada do dia existente para cada hábito
    criar se não houver
    na criação só add uma entrade se o hábito é repetido no dia 
    */

    let todayDailyEntries: DailyEntry[] =[];

    const lastDailyEntry = await DailyEntry.findOne({
        order: [['createdAt', 'DESC']]
    });

    if(!lastDailyEntry || !isToday(lastDailyEntry.createdAt)){
        // Criação de entradas para hábitos que repetem no dia
        const dayOfTheWeek = format(Date.now(), 'EEE');

        const habits: Habit[] = await Habit.findAll();
   
        let habitsThatRepeatToday = habits.filter(habit => {
            if(habit.repeteableAtTheseDaysOfWeek.includes(dayOfTheWeek)){
                return habit;
            }
        })

        if(habitsThatRepeatToday.length <= 0){
            // Throw error 
            return res.status(400).json('No habits registered for this day of the week');
        }

        todayDailyEntries = habitsThatRepeatToday.map(habit => {
            const dailyEntry: DailyEntry = new DailyEntry({
                habitId: habit.id
            });

            return dailyEntry
        })

        todayDailyEntries.forEach(async daily => await daily.save());

        console.log('CREATE DAILY ENTRIES');
    } else {
        // Entrada já foi criada
        const dailyEntries = await DailyEntry.findAll();

        todayDailyEntries = dailyEntries.filter(daily => isToday(daily.createdAt))

        console.log('FOUND TODAY DAILY ENTRIES');
    }

    return res.json(todayDailyEntries);
})


app.put("/daily-entry/:id", async (req, res) => {
    const {id}  = req.params;
    const {requirementThatWasMet} = req.body;

    if(
        requirementThatWasMet !== 'minimal' && 
        requirementThatWasMet !== 'partial' &&
        requirementThatWasMet !== 'full'
    ){
        res.status(400).json("Invalid requirement.");
    }

    let dailyEntry = await DailyEntry.findByPk(id);

    if(!dailyEntry){
        res.status(404).json("Not found.");
    } else {

        if(requirementThatWasMet === 'minimal'){
            dailyEntry.update({
                minimalCredit_RequirementWasMet: true,
                updatedAt: Date.now()
            })
        } else if(requirementThatWasMet === 'partial'){
            dailyEntry.update({
                minimalCredit_RequirementWasMet: true,
                partialCredit_RequirementWasMet: true,
                updatedAt: Date.now()
            })
        } else {
            dailyEntry.update({
                minimalCredit_RequirementWasMet: true,
                partialCredit_RequirementWasMet: true,
                fullCredit_RequirementWasMet: true,
                updatedAt: Date.now()
            })
        }

        await dailyEntry.save();

        res.json(dailyEntry);
    }

})

export default app;