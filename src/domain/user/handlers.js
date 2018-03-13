function createUser({ models, params }) {
    const {newUser} = params;
    const {firstName, emal} = newUser;
    console.log('models', models);
    console.log('params', params);
    console.log('newUser', newUser.value);

    // User.query().insert({ firstName, email }).then(data => {
    //     console.log('Succes:', data);
    //     res.send(201);
    // }).catch(error => {
    //     console.log('Error:', error);
    //     res.send(400);
    // });
    return;
    // const first_name = req.body.firstName;
    // const email = req.body.email;

    // if (first_name == undefined || email == undefined) {
    //     res.send(400);
    // } else {
    //     User.query().insert({ first_name, email}).then(data => {
    //         console.log('Succes:', data);
    //         res.send(201);
    //     }).catch(error => {
    //         console.log('Error:', error);
    //         res.send(400);
    //     });
    // }
};

module.exports = {
    createUser
};


// app.get('/user/:email', (req, res) => {
//     const email = req.params.email;

//     if (email == undefined) {
//         res.send(400);
//     } else {
//         User.query().where('email', email).then(user => {
//             console.log('Succes:', user);
//             res.send({
//                 data: user
//             });
//         }).catch(error => {
//             console.log('Error:', error);
//             res.send(404);
//         });
//     }
// });

// app.post('/user', (req, res) => {
//     const first_name = req.body.firstName;
//     const email = req.body.email;

//     if (first_name == undefined || email == undefined) {
//         res.send(400);
//     } else {
//         User.query().insert({ first_name, email}).then(data => {
//             console.log('Succes:', data);
//             res.send(201);
//         }).catch(error => {
//             console.log('Error:', error);
//             res.send(400);
//         });
//     }
// });