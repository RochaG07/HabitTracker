import { Request, Response } from "express";
import handleError from "../../../../error/handleError";
import UpdateDailyEntryStatusUseCase from "./UpdateDailyEntryStatusUseCase";

class UpdateDailyEntryStatusController{
    constructor(private updateDailyEntryStatusUseCase = new UpdateDailyEntryStatusUseCase()){};

    async handle(req: Request, res: Response){
        const {id} = req.params;
        const {requirementThatWasMet} = req.body;

        try{
            const dailyEntry = await this.updateDailyEntryStatusUseCase.execute({id, requirementThatWasMet});

            res.json(dailyEntry);
        } catch(err) {
            handleError(err, res);
        }
    }
}

export default UpdateDailyEntryStatusController;