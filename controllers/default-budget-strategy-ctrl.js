const DefaultBudgetStrategy = require('../db/models/default-budget-strategy-model');

function createDefaultBudgetStrategy(request, response) {
    const body = request.body;

    if (!body) {
        return response.status(400).json({
            success: false,
            message: 'You must provide a Budget Strategy',
        })
    }

    const dbs = new DefaultBudgetStrategy(body);

    if (!dbs) {
        return response.status(400).json({
            success: false,
            message: 'Failed to create a budget strategy with given content',
        });
    }

    dbs.save().then(() => {
        return response.status(201).json({
            success: true,
            data: dbs,
        });
    }).catch(error => {
        return response.status(400).json({
            success: false,
            error: error,
        });
    });
}

function getAllDefaultBudgetStrategies(_request, response) {
    DefaultBudgetStrategy.find().then((defaultBudgetStrategies, error) => {
        if (error || !defaultBudgetStrategies) return response.status(404).json({
            success: false,
            error,
            message: 'Unable to find any default budget strategies'
        });

        return response.status(200).json({
            success: true,
            data: defaultBudgetStrategies
        })
    });
}

module.exports = {
    createDefaultBudgetStrategy,
    getAllDefaultBudgetStrategies,
}