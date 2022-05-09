import { Router } from "express";

import addNewHabitController from "../modules/habits/useCases/AddNewHabit";
import deleteExistingHabitController from "../modules/habits/useCases/DeleteExistingHabit";
import showAllHabitsController from "../modules/habits/useCases/ShowAllHabits";
import showDailyEntriesOfHabitsController from "../modules/habits/useCases/ShowDailyEntriesOfHabits";
import trackHabitProgressController from "../modules/habits/useCases/TrackHabitProgress";
import updateDailyEntryStatusController from "../modules/habits/useCases/UpdateDailyEntryStatus";
import updateExistingHabitController from "../modules/habits/useCases/UpdateExistingHabit";

const habitsRoutes = Router();

// Habit
habitsRoutes.post("/habit", (req, res) => {
    addNewHabitController.handle(req, res);
});

habitsRoutes.get("/habit", async(req, res) => {
    showAllHabitsController.handle(req, res);
})

habitsRoutes.get("/habit/:id", (req, res) => {
    trackHabitProgressController.handle(req, res);
})

habitsRoutes.put("/habit/:id", async(req, res) => {
    updateExistingHabitController.handle(req, res);
});

habitsRoutes.delete("/habit/:id", async(req, res) => {
    deleteExistingHabitController.handle(req, res);
});


// Daily entry
habitsRoutes.get("/daily-entry", async (req, res) => {
    showDailyEntriesOfHabitsController.handle(req, res);
})

habitsRoutes.put("/daily-entry/:id", async (req, res) => {
    updateDailyEntryStatusController.handle(req, res);
})


export default habitsRoutes;