import AppError from "../../../../error/AppError";
import Habit from "../../models/Habit";

interface IRequest{
    id: string
}

class DeleteExistingHabitUseCase{
    async execute({id}:IRequest){
        let habit = await Habit.findByPk(id);
    
        if(!habit){
            throw new AppError("Not Found", 404);
        } 

        await habit.destroy();
    }
}

export default DeleteExistingHabitUseCase;