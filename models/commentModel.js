
// import mongoose
const mongoose = require("mongoose");
require("./postModel");

// route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post" , //reference to the post model
    },

    user:{
        type:String,
        required:true,
    },

    body:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("Comments", commentSchema);
