
// import the mongoose
const mongoose = require("mongoose");
require("./likeModel");
require("./commentModel");

// route handler
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

    body:{
        type:String,
        required:true,
    },

    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],

    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments",
    }]
});


// export
module.exports = mongoose.model("Post", postSchema);