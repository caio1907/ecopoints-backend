import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import sequelize from './index';

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: CreationOptional<number>
  firstName: string
  lastName: string
  email: string
  password: string
  attempts: number
  token: string
  created_at: CreationOptional<Date>,
  updated_at: CreationOptional<Date>
}

export default sequelize.define<UserModel>('users', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  firstName: DataTypes.STRING,
  lastName:DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  password: DataTypes.STRING,
  attempts: DataTypes.INTEGER,
  token: DataTypes.STRING,
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  hooks: {
    beforeUpdate: (user) => {
      user.updated_at = new Date();
    }
  }
});
