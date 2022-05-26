import AppError from "../../../../error/AppError";
import Habit from "../../models/Habit";
import { mockBuild, mockfindByPk, mockfindOne, mockfindAll } from "../../models/mocks/HabitMock";
import ShowAllHabitsUseCase from "./ShowAllHabitsUseCase";

let showAllHabitsUseCase: ShowAllHabitsUseCase;


jest.mock('../../models/Habit', () => {  
    return {
        build: mockBuild,
        findOne: mockfindOne,
        findAll: mockfindAll,
        findByPk: mockfindByPk,
    }
});

beforeEach(() => {
    jest.resetAllMocks();

    showAllHabitsUseCase = new ShowAllHabitsUseCase();
});

describe('Show all habits', () => {
    it('Should be able to show all existing habits', () => {
        expect(showAllHabitsUseCase.execute()).toEqual(expect.arrayContaining([]));
    })
})