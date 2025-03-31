const mongoose  = require("mongoose");
const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true,
    },
    product:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"product",
    },
    cart:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"cart"
    }
})

module.exports = mongoose.model("customer1",customerSchema);