const mongoose = require("mongoose");
const Customer = require("../model/customer1");

exports.getCustomer = async (req, res) => {
  try {
    const data = await Customer.find().populate({
        path:"cart",
        populate:{
            path:"product",
            model:"product",
            populate:{
                path:"category",
                model:"category"
            }
        }

    }).populate("product");
    return res.json({ errors: false, data: data });
  } catch (error) {
    return res.status(500).json({errors:true,message:error.message});
  }
};

exports.addCustomer = async (req,res) => {
    try {
        const data = await Customer.create(req.body);
        return res.json({errors:false,data:data});
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}

exports.updateCustomer = async (req,res) => {
    try {
        const data = await Customer.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json({errors:false,data:data});
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}
exports.deleteCustomer = async (req,res) => {
    try {
       const data = await Customer.findByIdAndDelete(req.params.id);
       return res.json({errors:false,data:data});
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message});
    }
}

