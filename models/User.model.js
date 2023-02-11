const mongoose = require('mongoose')
const { model, Schema } = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = model('User', userSchema)