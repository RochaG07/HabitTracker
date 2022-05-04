import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../database/db';

import DailyEntry from './DailyEntry';

class Habit extends Model {
    declare id: number;
    declare name: string;
    declare repeteableAtTheseDaysOfWeek: string;
    declare minimalCredit_condition: string;
    declare partialCredit_condition: string;
    declare fullCredit_condition: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Habit.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    repeteableAtTheseDaysOfWeek:{
        type: DataTypes.STRING,
        allowNull: false
    },
    minimalCredit_condition:{
        type: DataTypes.STRING,
    },
    partialCredit_condition:{
        type: DataTypes.STRING,
    },
    fullCredit_condition:{
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: Date.now()
    },
    updatedAt:{
        type: DataTypes.DATE,
        defaultValue: Date.now()
    }

},{
    tableName: 'habits',
    sequelize
}
)

Habit.hasMany(DailyEntry);

export default Habit;