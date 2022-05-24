import { Request, Response } from "express";
import handleError from "../../../../error/handleError";
import DeleteExistingHabitUseCase from "./DeleteExistingHabitUseCase";

class DeleteExistingHabitController{
    constructor(private deleteExistingHabitUseCase = new DeleteExistingHabitUseCase()){}

    async handle(req: Request, res: Response){
        const {id} = req.params;

        try{
            await this.deleteExistingHabitUseCase.execute({id});
        } catch(err) {
            handleError(err, res);
        }

        res.json("Deleted");
    }

}

export default DeleteExistingHabitController;