/** Database for lunchly */

const pg = require("pg");
const dotenv = require("dotenv").config();

const db = new pg.Client({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'lunchly'
});

db.connect();

module.exports = db;
