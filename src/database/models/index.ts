import { Sequelize } from "sequelize";
const config = require('../config');

export default new Sequelize(config.database, config.username, config.password, config);
