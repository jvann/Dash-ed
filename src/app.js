const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Model } = require('objection');
const Knex = require('knex');

const port = process.env.PORT || 3000;

const knex = Knex({
    client: 'pg',
    connection: process.env.DATABASE_URL
});
Model.knex(knex);

class User extends Model {
    static get tableName() {
        return 'users';
    }
}

const swaggerTools = require('swagger-tools');
const swaggerApi = require('./../api/swagger-api');

const controllers = require('./handlers');

// Custom middleware
const createReqLocals = require('./middleware/create-req-locals');
const swaggerOperationController = require('./middleware/swagger-operation-controller');
const errorHandler = require('./middleware/error-handler');

app.use(bodyParser.json());
app.use(createReqLocals);

swaggerTools.initializeMiddleware(swaggerApi, middleware => {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    // Route validated requests to appropriate controller
    app.use(swaggerOperationController({ controllers }));

    app.use(errorHandler);

    app.get('/', (req, res) => res.send({text: 'Hello Dash-ed REST API!1'}));

    app.listen(port, () => console.log(`Server is up on port ${port}`));
});

module.exports = { app };