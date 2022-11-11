const express = require('express');

const DefaultBudgetStrategy = require('../controllers/default-budget-strategy-ctrl');
const router = express.Router();


router.post('/default_budget_strategy', DefaultBudgetStrategy.createDefaultBudgetStrategy);
router.get('/default_budget_strategy', DefaultBudgetStrategy.getAllDefaultBudgetStrategies);

module.exports = router;