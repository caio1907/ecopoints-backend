require('dotenv').config();

module.exports = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_DB,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  dialect: process.env.DATABASE_DIALECT || 'postgres',
  storage: './database.sqlite',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
