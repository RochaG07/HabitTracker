import Habit from "../../models/Habit";

interface IRequest{
    id: string,
    name: string, 
    repeteableAtTheseDaysOfWeek: string, 
    minimalCredit_condition: string,
    partialCredit_condition: string,
    fullCredit_condition: string
}

class UpdateExistingHabitUseCase{
    async execute(data: IRequest): Promise<Habit>{
        let habit = await Habit.findByPk(data.id);
    
        if(!habit){
            throw new Error("Not found.");
        } 

        await habit.update({
            name: data.name,
            repeteableAtTheseDaysOfWeek: data.repeteableAtTheseDaysOfWeek,
            minimalCredit_condition: data.minimalCredit_condition,
            partialCredit_condition: data.partialCredit_condition,
            fullCredit_condition: data.fullCredit_condition,
            updatedAt: Date.now()
        })

        await habit.save();
    
        return habit;
    }
}

export default UpdateExistingHabitUseCase;