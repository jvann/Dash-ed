const bodyParser = require('body-parser');
const express = require('express');
const swaggerTools = require('swagger-tools');

const { db } = require('./db');
const models = require('./models');
const swaggerApi = require('./../api/swagger-api');
const controllers = require('./handlers');
const createReqLocals = require('./middleware/create-req-locals');
const swaggerOperationController = require('./middleware/swagger-operation-controller');
const sendControllerResponse = require('./middleware/send-controller-response');
const errorHandler = require('./middleware/error-handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(createReqLocals);

app.locals.db = db;
app.locals.models = models;

swaggerTools.initializeMiddleware(swaggerApi, middleware => {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    // Route validated requests to appropriate controller
    app.use(swaggerOperationController({ controllers }));

    app.use(sendControllerResponse);

    app.use(errorHandler);

    app.listen(port, () => console.log(`Server is up on port ${port}`));
});

module.exports = { app };