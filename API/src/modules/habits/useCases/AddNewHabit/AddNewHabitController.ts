import { Request, Response } from "express";
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

        const habit = await this.addNewHabitUseCase.execute({
            name, 
            repeteableAtTheseDaysOfWeek, 
            minimalCredit_condition,
            partialCredit_condition,
            fullCredit_condition
        })

        if(!habit){
            res.status(400).json("Error");
        }

        res.status(201).json(habit);
    }

}

export default AddNewHabitController;