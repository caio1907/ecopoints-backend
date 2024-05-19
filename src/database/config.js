require('dotenv').config();

module.exports = {
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  dialect: process.env.DB_DIALECT || 'mysql',
  storage: './database.sqlite',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
