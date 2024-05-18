import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import sequelize from './index';

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: CreationOptional<number>
  firstName: string
  lastName: string
  email: string
  password: string
  attempts: number,
  token: string
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
  token: DataTypes.STRING
});
