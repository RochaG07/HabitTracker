import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../database/db';

class DailyEntry extends Model{
    declare id: number;
    declare minimalCredit_RequirementWasMet: number;
    declare partialCredit_RequirementWasMet: number;
    declare fullCredit_RequirementWasMet: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

DailyEntry.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    habitId:{
        type: DataTypes.INTEGER,
        references: {
            model: 'habits',
            key: 'id'
        }
    },
    minimalCredit_RequirementWasMet:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    partialCredit_RequirementWasMet:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    fullCredit_RequirementWasMet:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    tableName: 'dailyEntries',
    sequelize
})


export default DailyEntry;