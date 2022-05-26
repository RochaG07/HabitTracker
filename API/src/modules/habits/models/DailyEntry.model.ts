import { AutoIncrement, BelongsTo, Column, CreatedAt, ForeignKey, Model, PrimaryKey, Table, Unique, UpdatedAt } from 'sequelize-typescript';
import Habit from './Habit.model';

@Table({
    modelName: 'dailyEntries'
})
export default class DailyEntry extends Model{
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id!: number;

    @Column
    minimalCredit_RequirementWasMet!: boolean;

    @Column
    partialCredit_RequirementWasMet!: boolean;

    @Column
    fullCredit_RequirementWasMet!: boolean;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;

    @ForeignKey(() => Habit)
    @Column
    habitId!: string

    @BelongsTo(() => Habit)
    habit!: Habit
}