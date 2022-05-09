import { Request, Response } from "express";
import handleError from "../../../../error/handleError";
import ShowDailyEntriesOfHabitsUseCase from "./ShowDailyEntriesOfHabitsUseCase";

class ShowDailyEntriesOfHabitsController{
    constructor(private showDailyEntriesOfHabitsUseCase = new ShowDailyEntriesOfHabitsUseCase()){}

    async handle(req: Request, res: Response){
        try{
            const entries = await this.showDailyEntriesOfHabitsUseCase.execute();

            res.json(entries);
        } catch(err) {
            handleError(err, res);
        }
    }
}

export default ShowDailyEntriesOfHabitsController;