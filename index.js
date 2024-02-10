

const express = require("express");
const app = express();

// import dotenv
require("dotenv").config();

const PORT = process.env.PORT || 3000;


// middleware to parse json data from the request body
app.use(express.json());

// import routes

const blogRoutes = require("./routes/blog");

// mount
app.use("/api/v1", blogRoutes);

// Database
const connectDB = require("./config/database");
connectDB();


// start the server
app.listen(PORT , () => {
    console.log(`Server Started Successfully at ${PORT}`);
})

// default route
app.get( "/", (req,res) => {
    res.send("This is HomePage");
});