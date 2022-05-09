import { eachDayOfInterval, format } from "date-fns";
import AppError from "../../../../error/AppError";
import DailyEntry from "../../models/DailyEntry";
import Habit from "../../models/Habit";

interface IRequest{
    id: string
}

class TrackHabitProgressUseCase {
    async execute({id}: IRequest): Promise<string>{

        let habit = await Habit.findByPk(id);

        if(!habit){
            throw new AppError("Habit not Found")
        } 

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

        return `${actualValue}/${maxPossibleValue}`; 
    }
}

export default TrackHabitProgressUseCase;