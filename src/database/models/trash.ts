import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from './index';

interface TrashModel extends Model<InferAttributes<TrashModel>, InferCreationAttributes<TrashModel>> {
  id: CreationOptional<number>
  types: string
  created_at: CreationOptional<Date>
  updated_at: CreationOptional<Date>
}

export default sequelize.define<TrashModel>('trash', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  types: DataTypes.STRING,
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
})
