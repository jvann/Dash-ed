module.exports.createUser = function createUser(req, res, next) {
    console.log('req.swagger', req.swagger);
    console.log(req.swagger.params.newUser.value);
    res.send(201);
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