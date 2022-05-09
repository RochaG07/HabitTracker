import UpdateExistingHabitController from "./UpdateExistingHabitController";
import UpdateExistingHabitUseCase from "./UpdateExistingHabitUseCase";

const updateExistingHabitUseCase = new UpdateExistingHabitUseCase();
const updateExistingHabitController = new UpdateExistingHabitController(updateExistingHabitUseCase);

export default updateExistingHabitController;
