const express = require('express');
const app = express();
const { Model } = require('objection');
const Knex = require('knex');

const port = process.env.PORT || 3000;
console.log(process.env.DATABASE_URL);

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

app.get('/', (req, res) => {
    res.send({
        name: 'Test',
        likes: ['Biking', 'Dancing', 'Coding']
    });   
});

app.get('/user', (req, res) => {
    User.query().then(users => {
        console.log('Succes:', users);
        res.send({
            data: users
        });
    }).catch(error => {
        console.log('Error:', error);
        res.send({
            error: error
        });
    });
});

app.post('/user', (req, res) => {
    User.query().insert({ first_last_name: 'John', second_last_name: 'Doe'}).then(data => {
        console.log('Succes:', data);
        res.send(201);
    }).catch(error => {
        console.log('Error:', error);
        res.send(400);
    });
});

app.listen(port, () => console.log(`Server is up on port ${port}`));