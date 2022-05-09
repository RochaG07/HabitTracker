import UpdateDailyEntryStatusController from "./UpdateDailyEntryStatusController";
import UpdateDailyEntryStatusUseCase from "./UpdateDailyEntryStatusUseCase";

const updateDailyEntryStatusUseCase = new UpdateDailyEntryStatusUseCase();
const updateDailyEntryStatusController = new UpdateDailyEntryStatusController(updateDailyEntryStatusUseCase);

export default updateDailyEntryStatusController;