import AppError from "../../../../error/AppError";
import Habit from "../../models/Habit.model";
import { mockBuild, mockfindByPk, mockfindOne } from "../../models/mocks/HabitMock";
import DeleteExistingHabitUseCase from "./DeleteExistingHabitUseCase";

let deleteExistingHabitUseCase: DeleteExistingHabitUseCase;


jest.mock('../../models/Habit', () => {  
    return {
        build: mockBuild,
        findOne: mockfindOne,
        findByPk: mockfindByPk
    }
});

beforeEach(() => {
    jest.resetAllMocks();

    deleteExistingHabitUseCase = new DeleteExistingHabitUseCase();
});

describe('Delete a habit', () => {
    it('Should be able to delete a existing habit', () => {
        expect(deleteExistingHabitUseCase.execute({id: '1'})).not.toBeInstanceOf(AppError);
    })

    it('Should not be able to delete a non-existing habit', () => {
        expect(deleteExistingHabitUseCase.execute({id: '2'})).rejects.toBeInstanceOf(AppError);
    })
})