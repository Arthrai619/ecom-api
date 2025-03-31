const mongoose = require("mongoose");

const customer2Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"Customer"
    }
},{timestamps:true})

module.exports = mongoose.model("customer2",customer2Schema);