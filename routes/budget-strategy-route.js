const express = require('express');

const BudgetStrategy = require('../controllers/budget-strategy-ctrl');
const router = express.Router();


router.post('/budget_strategy', BudgetStrategy.createBudgetStrategy);
router.get('/budget_strategy/:id', BudgetStrategy.getBudgetStrategy);
router.patch('/budget_strategy/:id', BudgetStrategy.updateBudgetStrategy);

module.exports = router;