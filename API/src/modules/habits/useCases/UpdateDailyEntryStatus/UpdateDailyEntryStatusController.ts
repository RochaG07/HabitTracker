import { Request, Response } from "express";
import UpdateDailyEntryStatusUseCase from "./UpdateDailyEntryStatusUseCase";

class UpdateDailyEntryStatusController{
    constructor(private updateDailyEntryStatusUseCase = new UpdateDailyEntryStatusUseCase()){};

    async handle(req: Request, res: Response){
        const {id} = req.params;
        const {requirementThatWasMet} = req.body;

        const dailyEntry = await this.updateDailyEntryStatusUseCase.execute({id, requirementThatWasMet});

        res.json(dailyEntry);
    }
}

export default UpdateDailyEntryStatusController;