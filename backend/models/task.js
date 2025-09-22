//imports
// Sequelize - database ORM, DataTypes & model - class extensions from ORM, sequelize - database
import { DataTypes, Model } from 'sequelize';
import sequelize from '../connect.js';

class Task extends Model{}

Task.init(
  {
    id: {
    type: DataTypes.INTEGER,
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
    },
    taskIsComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  },
  {
    sequelize,
    modelName: 'Task',
    tableName: 'Tasks',

  },
);

export default Task;

console.log(Task === sequelize.models.Task)




