import { format, isToday } from "date-fns";
import DailyEntry from "../../models/DailyEntry";
import Habit from "../../models/Habit";

class ShowDailyEntriesOfHabitsUseCase{
    async execute(): Promise<DailyEntry[]>{
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
                throw new Error('No habits registered for this day of the week');
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
    
        return todayDailyEntries;
    }
}

export default ShowDailyEntriesOfHabitsUseCase;