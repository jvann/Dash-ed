const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({
        name: 'Test',
        likes: ['Biking', 'Dancing', 'Coding']
    });   
});

app.get('/user/:email', (req, res) => {
    const email = req.params.email;

    if (email == undefined) {
        res.send(400);
    } else {
        User.query().where('email', email).then(user => {
            console.log('Succes:', user);
            res.send({
                data: user
            });
        }).catch(error => {
            console.log('Error:', error);
            res.send(404);
        });
    }
});

app.post('/user', (req, res) => {
    const first_name = req.body.firstName;
    const email = req.body.email;

    if (first_name == undefined || email == undefined) {
        res.send(400);
    } else {
        User.query().insert({ first_name, email}).then(data => {
            console.log('Succes:', data);
            res.send(201);
        }).catch(error => {
            console.log('Error:', error);
            res.send(400);
        });
    }
});

app.listen(port, () => console.log(`Server is up on port ${port}`));