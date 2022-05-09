import { Request, Response } from "express";
import handleError from "../../../../error/handleError";
import UpdateExistingHabitUseCase from "./UpdateExistingHabitUseCase";

class UpdateExistingHabitController{
    constructor(private updateExistingHabitUseCase = new UpdateExistingHabitUseCase()){}

    async handle(req: Request, res: Response){
        const {id} = req.params;

        const {
            name, 
            repeteableAtTheseDaysOfWeek, 
            minimalCredit_condition,
            partialCredit_condition,
            fullCredit_condition
        } = req.body;

        try{
            const habit = await this.updateExistingHabitUseCase.execute({
                id,
                name, 
                repeteableAtTheseDaysOfWeek, 
                minimalCredit_condition,
                partialCredit_condition,
                fullCredit_condition
            });
    
            res.json(habit);
        } catch(err) {
            handleError(err, res);
        }
    }
}

export default UpdateExistingHabitController;

