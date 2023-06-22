import {
  AllowNull,
  Default,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'users',
  timestamps: false,
})

export class User extends Model {
  @AllowNull(false)
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
    id!: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    name!: string;
  
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
    defaultValue: 0,
  })
    score!: number;
}
