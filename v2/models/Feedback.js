const { Schema , model } = require('mongoose')

const FeedbackSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
},{timestamps:true})

const Feedback = model('Feedback',FeedbackSchema)

module.exports = Feedback