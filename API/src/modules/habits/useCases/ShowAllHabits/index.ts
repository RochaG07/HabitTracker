import ShowAllHabitsController from "./ShowAllHabitsController";
import ShowAllHabitsUseCase from "./ShowAllHabitsUseCase";

const showAllHabitsUseCase = new ShowAllHabitsUseCase();
const showAllHabitsController = new ShowAllHabitsController(showAllHabitsUseCase);

export default showAllHabitsController;