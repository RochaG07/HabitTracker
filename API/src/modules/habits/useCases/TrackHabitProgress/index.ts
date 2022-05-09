import TrackHabitProgressController from "./TrackHabitProgressController";
import TrackHabitProgressUseCase from "./TrackHabitProgressUseCase";

const trackHabitProgressUseCase = new TrackHabitProgressUseCase();
const trackHabitProgressController = new TrackHabitProgressController(trackHabitProgressUseCase);

export default trackHabitProgressController;