import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../connect';

class Task extends Model{}

export default (sequelize) =>{
  Task.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    taskName: {
      type: DataTypes.TEXT,
      allowNull: false

    },
    taskDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    taskStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    taskEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  })
}
