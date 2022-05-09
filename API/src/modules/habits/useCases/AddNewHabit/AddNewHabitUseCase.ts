import Habit from "../../models/Habit";

interface IRequest{
    name: string, 
    repeteableAtTheseDaysOfWeek: string, 
    minimalCredit_condition: string,
    partialCredit_condition: string,
    fullCredit_condition: string
}

class AddNewHabitUseCase{
    async execute(data: IRequest): Promise<Habit>{
        const habit = Habit.build({
            name: data.name, 
            repeteableAtTheseDaysOfWeek: data.repeteableAtTheseDaysOfWeek, 
            minimalCredit_condition: data.minimalCredit_condition,
            partialCredit_condition: data.partialCredit_condition,
            fullCredit_condition: data.fullCredit_condition
        });
        
        await habit.save();

        return habit;
    }
}

export default AddNewHabitUseCase;