import { Request, Response } from "express";
import handleError from "../../../../error/handleError";
import TrackHabitProgressUseCase from "./TrackHabitProgressUseCase";

class TrackHabitProgressController{
    constructor(private trackHabitProgressUseCase = new TrackHabitProgressUseCase){}

    async handle(req: Request, res: Response){
        const {id} = req.params;

        try{
            const progress = await this.trackHabitProgressUseCase.execute({id});

            return res.json(progress);
        } catch(err) {
            handleError(err, res);
        }

    }
}

export default TrackHabitProgressController;