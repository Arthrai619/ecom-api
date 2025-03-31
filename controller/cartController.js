const Cart = require("../model/cart");
exports.getCart = async (req,res) => {
    try {
        const data = await Cart.find().populate({
            path:"product",
            model:"product",
            populate:{
                path:"category",
                model:"category"
            }
            
        });
        return res.json({errors:false,data:data});
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}

exports.addCart = async (req,res) => {
    try {
       const data = await Cart.create(req.body);
       return res.json({errors:true,data:data});
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}

exports.updateCart = async (req,res)=>{
    try {
        const data = await Cart.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({errors:true,data:data});
    }
     catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}
exports.deleteCart = async (req,res) => {
    try {
      const data = await Cart.findByIdAndDelete(req.params.id);  
      return res.json({errors:false,data:data});
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}
