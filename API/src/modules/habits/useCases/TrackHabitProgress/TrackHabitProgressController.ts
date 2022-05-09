import { Request, Response } from "express";
import TrackHabitProgressUseCase from "./TrackHabitProgressUseCase";

class TrackHabitProgressController{
    constructor(private trackHabitProgressUseCase = new TrackHabitProgressUseCase){}

    async handle(req: Request, res: Response){
        const {id} = req.params;

        const progress = await this.trackHabitProgressUseCase.execute({id});

        return res.json(progress);
    }
}

export default TrackHabitProgressController;