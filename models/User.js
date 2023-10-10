const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String,
        required: false,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
    nickName: {
        type: String,
        required: false,
    },
    point: {
        type: Number,
        required: false,
        default: 0,
    },
    grade: {
        type: Number,
        required: false,
        default: 0,
    },
})

const User = mongoose.model('User', userSchema);

module.exports = User;