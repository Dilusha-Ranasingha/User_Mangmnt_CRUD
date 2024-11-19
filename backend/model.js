const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usershecma = new Schema({
    id: Number,
    name: String,
})

const User = mongoose.model('User', usershecma);

module.exports = User;