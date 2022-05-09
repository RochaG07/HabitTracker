import AddNewHabitController from "./AddNewHabitController";
import AddNewHabitUseCase from "./AddNewHabitUseCase";

const addNewHabitUseCase = new AddNewHabitUseCase();
const addNewHabitController = new AddNewHabitController(addNewHabitUseCase);

export default addNewHabitController;