import DeleteExistingHabitController from "./DeleteExistingHabitController";
import DeleteExistingHabitUseCase from "./DeleteExistingHabitUseCase";

const deleteExistingHabitUseCase = new DeleteExistingHabitUseCase();
const deleteExistingHabitController = new DeleteExistingHabitController(deleteExistingHabitUseCase);

export default deleteExistingHabitController;