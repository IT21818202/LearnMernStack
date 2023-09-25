const router = require('express').Router();
let User = require('../models/user.model');

// get order
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add order
router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const shippingAddress = req.body.shippingAddress;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        firstName,
        lastName,
        shippingAddress,
        email,
        password
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;