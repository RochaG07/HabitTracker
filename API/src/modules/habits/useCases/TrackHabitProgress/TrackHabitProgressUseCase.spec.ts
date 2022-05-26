import AppError from "../../../../error/AppError";

import { mockBuild, mockfindByPk, mockfindOne, mockfindAll } from "../../models/mocks/HabitMock";
import { mockfindOne as mockfindOneDE, mockfindAll as mockfindAllDE, mockfindByPk as mockfindByPkDE} from "../../models/mocks/DailyEntryMock";
import TrackHabitProgressUseCase from "./TrackHabitProgressUseCase";

let trackHabitProgressUseCase: TrackHabitProgressUseCase;

jest.mock('../../models/Habit', () => {  
    return {
        build: mockBuild,
        findOne: mockfindOne,
        findAll: mockfindAll,
        findByPk: mockfindByPk,
    }
});

jest.mock('../../models/DailyEntry', () => {
    return {
        findOne: mockfindOneDE,
        findAll: mockfindAllDE,
        findByPk: mockfindByPkDE
    }
})

beforeEach(() => {
    jest.resetAllMocks();

    trackHabitProgressUseCase = new TrackHabitProgressUseCase();
});

describe('Track habit progress', () => {
    it('Should be able to track a habit progress', async () => {
        // Fixa a data atual
        jest.spyOn(Date, 'now').mockImplementationOnce(() => {
            return new Date(2020, 4, 12, 10).getTime();
        });

        const habitProgress: string = await trackHabitProgressUseCase.execute({id: '1'});

        expect(habitProgress).toMatch("0/6");
    })

    it('Should not be able to track the progress of a non-existing habit', () => {
        expect(trackHabitProgressUseCase.execute({id: '2'})).rejects.toBeInstanceOf(AppError);
    })
})