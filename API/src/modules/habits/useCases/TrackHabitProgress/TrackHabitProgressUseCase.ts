import { eachDayOfInterval, format } from "date-fns";
import AppError from "../../../../error/AppError";
import DailyEntry from "../../models/DailyEntry";
import Habit from "../../models/Habit";

const FULL_CREDIT_VALUE: number = 3;
const PARTIAL_CREDIT_VALUE: number  = 2;
const MINIMAL_CREDIT_VALUE: number  = 1;

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
        
        const repeteableAtTheseDaysOfWeek = habit.repeteableAtTheseDaysOfWeek;

        dateInterval.forEach(date => {
            const dayOfTheWeek = format(date, 'EEE');

            if(repeteableAtTheseDaysOfWeek.includes(dayOfTheWeek)){
                maxPossibleValue += FULL_CREDIT_VALUE;
            }
        })


        const entriesOfAnHabit = await DailyEntry.findAll({
            where: {
                habitId: id
            }
        })

        entriesOfAnHabit.forEach(entry => {
            if(entry.fullCredit_RequirementWasMet){
                actualValue += FULL_CREDIT_VALUE;
            } else if(entry.partialCredit_RequirementWasMet){
                actualValue += PARTIAL_CREDIT_VALUE;
            } else if(entry.minimalCredit_RequirementWasMet){
                actualValue += MINIMAL_CREDIT_VALUE;
            }
        })

        return `${actualValue}/${maxPossibleValue}`; 
    }
}

export default TrackHabitProgressUseCase;