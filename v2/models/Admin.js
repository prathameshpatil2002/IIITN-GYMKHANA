const { Schema , model } = require('mongoose')


const AdminSchema = new Schema({
    username : {
        type:String,
        required:[true,'Username is required']
    },
    password:{
        type:String,
        required:[true,'Password is required']
    }
},{timestamps:true});


const admin = model('Admin',AdminSchema)

module.exports = admin;