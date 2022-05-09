import { Request, Response } from "express";
import handleError from "../../../../error/handleError";
import AddNewHabitUseCase from "./AddNewHabitUseCase";

class AddNewHabitController{
    constructor(private addNewHabitUseCase: AddNewHabitUseCase){}

    async handle(req: Request, res: Response){
        const {
            name, 
            repeteableAtTheseDaysOfWeek, 
            minimalCredit_condition,
            partialCredit_condition,
            fullCredit_condition
        } = req.body;

        try{
            const habit = await this.addNewHabitUseCase.execute({
                name, 
                repeteableAtTheseDaysOfWeek, 
                minimalCredit_condition,
                partialCredit_condition,
                fullCredit_condition
            })
    
            res.status(201).json(habit);
        } catch(err) {
            handleError(err, res);
        }
    }
}

export default AddNewHabitController;