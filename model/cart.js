const mongoose = require("mongoose");

const cartSchema  = new mongoose.Schema({
    product:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("cart",cartSchema);