

// import the mongoose
const mongoose = require("mongoose");
require("./postModel");


// route handler
const likeHandlerSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" // reference to the post model
    },

    user:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model("Like", likeHandlerSchema);