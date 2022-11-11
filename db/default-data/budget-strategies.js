const DefaultBudgetStrategy = require('../models/default-budget-strategy-model');

// Default Budgets
const default_1 = new DefaultBudgetStrategy({
    nickname: '50 / 30 / 20',
    type: "traditional",
    categories: new Map([["needs", 50], ["wants", 30], ["savings", 20]]),
});

const default_2 = new DefaultBudgetStrategy({
    nickname: '50 / 20 / 30',
    type: 'traditional',
    categories: new Map([["needs", 50], ["wants", 20], ["savings", 30]])
});

const default_3 = new DefaultBudgetStrategy({
    nickname: '40 / 20 / 40',
    type: 'traditional',
    categories: new Map([["needs", 40], ["wants", 20], ["savings", 40]])
});

// Add your documents here
const documents = [default_1, default_2, default_3];

for (let d of documents) {
    d.save().catch(error => {
        console.error(`ERROR: failed to create the following document:\n${d}`);
    });
}