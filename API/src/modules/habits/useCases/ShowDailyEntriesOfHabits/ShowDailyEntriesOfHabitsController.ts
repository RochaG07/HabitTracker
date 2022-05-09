import { Request, Response } from "express";
import ShowDailyEntriesOfHabitsUseCase from "./ShowDailyEntriesOfHabitsUseCase";

class ShowDailyEntriesOfHabitsController{
    constructor(private showDailyEntriesOfHabitsUseCase = new ShowDailyEntriesOfHabitsUseCase()){}

    async handle(req: Request, res: Response){
        const entries = await this.showDailyEntriesOfHabitsUseCase.execute();

        res.json(entries);
    }
}

export default ShowDailyEntriesOfHabitsController;