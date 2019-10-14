const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const userSchema = new Schema({
    userName: {type: String, required: true},
    role: {type: String, required: true},
    mailID: {type: String, required: true},
    aplicationName: {type: String, required: true}
});



module.exports = Mongoose.model('MongoUser', userSchema);
