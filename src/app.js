const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Model } = require('objection');
const Knex = require('knex');

const swaggerTools = require('swagger-tools');
const swaggerApi = require('./../api/swagger-api');
const controllers = require('./handlers');

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

app.use(bodyParser.json());

swaggerTools.initializeMiddleware(swaggerApi, middleware => {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter({ controllers }));

    app.get('/', (req, res) => res.send({text: 'Hello Dash-ed REST API!1'}));

    app.listen(port, () => console.log(`Server is up on port ${port}`));
});

module.exports = { app };