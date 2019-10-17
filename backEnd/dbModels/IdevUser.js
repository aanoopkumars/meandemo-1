const mongoose = require('mongoose');
const uniqValidator = require('mongoose-unique-validator');

Idev_user = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

Idev_user.plugin(uniqValidator);

module.exports = mongoose.model('idevUser', Idev_user);