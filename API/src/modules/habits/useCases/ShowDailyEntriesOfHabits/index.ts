import ShowDailyEntriesOfHabitsController from "./ShowDailyEntriesOfHabitsController";
import ShowDailyEntriesOfHabitsUseCase from "./ShowDailyEntriesOfHabitsUseCase";

const showDailyEntriesOfHabitsUseCase =  new ShowDailyEntriesOfHabitsUseCase();
const showDailyEntriesOfHabitsController =  new ShowDailyEntriesOfHabitsController(showDailyEntriesOfHabitsUseCase);

export default showDailyEntriesOfHabitsController;