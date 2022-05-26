import { AutoIncrement, Column, CreatedAt, HasMany, Model, PrimaryKey, Table, Unique, UpdatedAt } from 'sequelize-typescript';
import DailyEntry from './DailyEntry.model';


@Table({
    modelName: 'habits'
})
export default class Habit extends Model {
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id!: number;

    @Column
    name!: string;

    @Column
    repeteableAtTheseDaysOfWeek!: string;

    @Column
    minimalCredit_condition!: string;

    @Column
    partialCredit_condition!: string;

    @Column
    fullCredit_condition!: string;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;

    @HasMany(() => DailyEntry)
    dailyEntries!: DailyEntry[];
}
