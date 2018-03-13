const get = require('lodash/get');

function swaggerOperationController({ controllers }) {
    return function(req, res, next) {
        console.log('req.swagger', req.swagger);
        const operationId = get(req, 'swagger.operation.operationId');
        if (!operationId) {
            return next();
        }

        const controllerForOperation = controllers[operationId];
        if (!controllerForOperation) {
            return next();
        }

        const context = {
            models: req.app.locals.models,
            params: req.swagger.params
        };

        return Promise.resolve(controllerForOperation(context))
            .then((result) => {
                //req.locals.result = result;
                return res.send(201);
            })
            .catch(next);
    }
}

module.exports = swaggerOperationController;