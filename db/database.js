const mongoose = require("mongoose");

const host = process.env.HOST_DB;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;

mongoose.connect(`mongodb://${host}/budget_strategies`,
    { useNewUrlParser: true }).catch(error => {
        console.log('Connection error', error.message)
    });

const db = mongoose.connection;

module.exports = db;