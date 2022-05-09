import { Request, Response } from "express";
import ShowAllHabitsUseCase from "./ShowAllHabitsUseCase";

class ShowAllHabitsController{
    constructor(private showAllHabitsUseCase = new ShowAllHabitsUseCase){}

    async handle(req: Request, res: Response){
        const habits = await this.showAllHabitsUseCase.execute();

        res.json(habits);
    }
}

export default ShowAllHabitsController;