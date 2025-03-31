const {addCustomer,updateCustomer,getCustomer,deleteCustomer} = require("../controller/customerController");
const route = require("express").Router();

route.get("/",getCustomer);

route.post("/",addCustomer);

route.put("/:id",updateCustomer);

route.delete("/:id",deleteCustomer);

module.exports = route;