const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv').config();

const BudgetStrategyRouter = require('./routes/budget-strategy-route');
const DefaultBudgetStrategyRouter = require('./routes/default-budget-strategy-route');

if (dotenv.error) {
    throw dotenv.error;
}

const app = express();
const port = 3000;

const db = require('./db/database');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
    console.log('MongoDB connection established successfully');
});


app.get('/', (request, response) => {
    response.send('Hello World');
});

app.use('/api', BudgetStrategyRouter);
app.use('/dbs_api', DefaultBudgetStrategyRouter);

app.listen(port, () => {
    console.log(`ren-mongo-server listening on port ${port}`);
});