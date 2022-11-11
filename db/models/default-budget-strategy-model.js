const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DefaultBudgetStrategy = new Schema(
    {
        date_created: { type: Date },
        nickname: String,
        type: { type: String },
        categories: { type: Map, of: String },
    }
);

module.exports = mongoose.model('default_budget_strategies', DefaultBudgetStrategy);