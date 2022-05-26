import AppError from "../../../../error/AppError";
import { mockBuild, mockfindByPk, mockfindOne } from "../../models/mocks/HabitMock";
import AddNewHabitUseCase from "./AddNewHabitUseCase";

let addNewHabitUseCase: AddNewHabitUseCase;

/*
jest.mock('../../models/Habit', () => {  
    return {
        build: mockBuild,
        findOne: mockfindOne,
        findByPk: mockfindByPk
    }
});
*/



beforeEach(() => {
    //jest.resetAllMocks();

    addNewHabitUseCase = new AddNewHabitUseCase();

});

describe('Add a new habit', () => {
    it('should be able to create a new habit', async () => {
        const habit = await addNewHabitUseCase.execute({
            name: "testHabit",
            repeteableAtTheseDaysOfWeek: "Mon,Thu,Wed,Fri",
            minimalCredit_condition: "Ler uma linha de código",
            partialCredit_condition: "2 Pomodoros",
            fullCredit_condition: "6 Pomodoros"
        });

        expect(habit).toHaveProperty("id");
    });

    it('should not be able to a new habit when there is already one with the same name', async () => {
        await expect(
            addNewHabitUseCase.execute({
                name: "testAlreadyThere",
                repeteableAtTheseDaysOfWeek: "Mon,Thu,Wed,Fri",
                minimalCredit_condition: "Ler uma linha de código",
                partialCredit_condition: "2 Pomodoros",
                fullCredit_condition: "6 Pomodoros"
            })
        ).rejects.toBeInstanceOf(AppError);
    });
});