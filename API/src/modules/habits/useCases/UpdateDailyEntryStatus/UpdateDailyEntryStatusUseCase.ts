import AppError from "../../../../error/AppError";
import DailyEntry from "../../models/DailyEntry.model";

interface IRequest{
    id: string,
    requirementThatWasMet: string,
}

class UpdateDailyEntryStatusUseCase{
    async execute({id, requirementThatWasMet}: IRequest): Promise<DailyEntry>{

        if(
            requirementThatWasMet !== 'minimal' && 
            requirementThatWasMet !== 'partial' &&
            requirementThatWasMet !== 'full'
        ){
            throw new AppError("Invalid requirement.");
        }

        let dailyEntry = await DailyEntry.findByPk(id);

        if(!dailyEntry){
            throw new AppError("Daily entry not found.");
        } 
        

        if(requirementThatWasMet === 'minimal'){
            dailyEntry.update({
                minimalCredit_RequirementWasMet: true,
                updatedAt: Date.now()
            })
        } else if(requirementThatWasMet === 'partial'){
            dailyEntry.update({
                minimalCredit_RequirementWasMet: true,
                partialCredit_RequirementWasMet: true,
                updatedAt: Date.now()
            })
        } else {
            dailyEntry.update({
                minimalCredit_RequirementWasMet: true,
                partialCredit_RequirementWasMet: true,
                fullCredit_RequirementWasMet: true,
                updatedAt: Date.now()
            })
        }

        await dailyEntry.save();

        return dailyEntry;
    }
}

export default UpdateDailyEntryStatusUseCase;