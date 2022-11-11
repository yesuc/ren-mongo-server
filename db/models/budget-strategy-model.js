const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetStrategy = new Schema(
    {
        account_id: String,
        date_created: { type: Date, },
        nickname: String,
        type: { type: String },
        total_limit: { type: Number, },
        time_span: [Date],
        needs: { type: Map, of: String },
    },
    { timestamps: true },
);

module.exports = mongoose.model('budget_strategies', BudgetStrategy);