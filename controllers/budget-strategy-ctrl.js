const BudgetStrategy = require('../db/models/budget-strategy-model');

function createBudgetStrategy(request, response) {
    const body = request.body;

    if (!body) {
        return response.status(400).json({
            success: false,
            message: 'You must provide a Budget Strategy',
        })
    }

    const bs = new BudgetStrategy(body);

    if (!bs) {
        return response.status(400).json({
            success: false,
            message: 'Failed to create a budget strategy with given content',
        });
    }

    bs.save().then(() => {
        return response.status(201).json({
            success: true,
            budget_strategy: bs,
        });
    }).catch(error => {
        return response.status(400).json({
            success: false,
            error: error,
        });
    });
}

var getBudgetStrategy = (request, response) => {
    if (!request.params.id) return response.status(400).json({
        success: false,
        message: 'You must provide an id in your url params',
    });

    BudgetStrategy.findOne({ _id: request.params.id }).then((error, budgetStrategy) => {
        if (error || !budgetStrategy) return response.status(404).json({
            success: false,
            error,
            message: `Unable to find a budget strategy with id ${request.params._id}`
        });

        return response.status(200).json({
            success: true,
            budgetStrategy,
        });
    });
}

function updateBudgetStrategy(request, response) {
    const body = req.body;

    if (!request.params.id) return response.status(400).json({
        success: false,
        message: 'You must provide an id in your url params',
    });

    if (!body) return response.status(400).json({
        success: false,
        message: 'You must provide a fields to update',
    });

    BudgetStrategy.findOne({ _id: request.params.id, }).then((budgetStrategy, error) => {
        if (error) return response.status(404).json({
            success: false,
            error,
            message: 'Failed to find a budget strategy',
        });

        for (const key in body) {
            // Don't allow protected fields to be overwritten?
            if (Object.hasOwnProperty.call(body, key) && (key != 'id' || key != '_id')) {
                budgetStrategy[key] = body[key];
            }
        }

        budgetStrategy.save().then(() => {
            return response.status(400).json({
                success: true,
                budgetStrategy,
            });
        });

    });
}

module.exports = {
    createBudgetStrategy,
    getBudgetStrategy,
    updateBudgetStrategy,
};