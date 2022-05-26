import {Sequelize} from 'sequelize-typescript';
import DailyEntry from '../modules/habits/models/DailyEntry.model';
import Habit from '../modules/habits/models/Habit.model';

export default class db{
  repo: Sequelize | null = null;

  contructor(){
    this.connectDB();
  }

  connectDB(){
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: './src/database/database.sqlite3',
      models: ['../modules/habits/models/*.model.ts']
    }); 
    
    sequelize.addModels([Habit, DailyEntry]);
    
    sequelize.authenticate();
  }
}