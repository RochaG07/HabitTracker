import { mockBuild, mockfindByPk, mockfindOne, mockfindAll } from "../../models/mocks/HabitMock";
import { mockfindOne as mockfindOneDE, mockfindAll as mockfindAllDE, mockfindByPk as mockfindByPkDE} from "../../models/mocks/DailyEntryMock";
import UpdateDailyEntryStatusUseCase from "./UpdateDailyEntryStatusUseCase";
import AppError from "../../../../error/AppError";

let updateDailyEntryStatusUseCase: UpdateDailyEntryStatusUseCase;

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

    updateDailyEntryStatusUseCase = new UpdateDailyEntryStatusUseCase();
});

describe('Update the status of a daily entry', () => {
    it('Should be able to update the status of a daily entry', async () => {
        const dailyEntry = await updateDailyEntryStatusUseCase.execute({
            id: '1',
            requirementThatWasMet: 'minimal',
        }); 

        



        expect(dailyEntry.minimalCredit_RequirementWasMet).toBe(true);    
    })



    it('Should not be able to update the status of a non-existing daily entry', () => {
        expect(updateDailyEntryStatusUseCase.execute({
            id: '2', 
            requirementThatWasMet: 'minimal',
        }))
        .rejects.toBeInstanceOf(AppError);
    })

    
    it('Should not be accept any argument for requirementThatWasMet that is not minimal, partial or full', () => {
        expect(updateDailyEntryStatusUseCase.execute({
            id: '1', 
            requirementThatWasMet: 'wrongArgument',
        }))
        .rejects.toBeInstanceOf(AppError);
    })


})