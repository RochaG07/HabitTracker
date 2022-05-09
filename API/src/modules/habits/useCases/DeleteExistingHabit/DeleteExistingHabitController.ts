import { Request, Response } from "express";
import DeleteExistingHabitUseCase from "./DeleteExistingHabitUseCase";

class DeleteExistingHabitController{
    constructor(private deleteExistingHabitUseCase = new DeleteExistingHabitUseCase()){}

    async handle(req: Request, res: Response){
        const {id} = req.params;

        await this.deleteExistingHabitUseCase.execute({id});

        res.json("Deleted");
    }

}

export default DeleteExistingHabitController;