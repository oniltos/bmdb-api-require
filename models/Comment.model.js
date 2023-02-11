// em vez de import variavel from 'biblioteca', usamos const variavel = require('biblioteca')
const mongoose = require('mongoose')
const { model, Schema } = mongoose

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

//Em ves de export default, usamos module.exports = 
module.exports = model('Comment', commentSchema)