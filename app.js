const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const productRoutes = require("./routes/productRoute");
const categoryRoutes = require("./routes/categoryRoutes");
const customerRoutes = require("./routes/customerRoute");
const cartRoutes = require("./routes/cartRoutes");
const customer2routes = require("./routes/customer2Routes")

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
res.send("home");
});

app.get("/about",(req,res)=>{
res.send("about");
});

app.use("/api/product",productRoutes);
app.use("/api/category",categoryRoutes);
app.use("/api/customer1",customerRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/customer2",customer2routes);


app.listen(process.env.PORT);

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB);
        console.log(res.default.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
    }
}
db();


