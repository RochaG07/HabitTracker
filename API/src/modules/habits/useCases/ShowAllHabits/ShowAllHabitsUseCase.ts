import Habit from "../../models/Habit.model";

class ShowAllHabitsUseCase{
    async execute(): Promise<Habit[]>{
        const habits = await Habit.findAll();

        return habits;
    }
}

export default ShowAllHabitsUseCase;