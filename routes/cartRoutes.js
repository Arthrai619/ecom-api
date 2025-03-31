const {getCart,addCart,updateCart,deleteCart} = require("../controller/cartController");

const route = require("express").Router();

route.get("/",getCart);

route.post("/",addCart);

route.put("/:id",updateCart);

route.delete("/:id",deleteCart);

module.exports  = route;