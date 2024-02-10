
// import models

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
    try{
        // fetch the data from request
        const {post, user, body} = req.body;

        // create the new comment into the database
        const savedComment = await Comment.create({post, user, body});

        // find the post by ID and add the new comment into its comment's array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id} }, {new: true} )
                            .populate("comments") //populate comments m jo id h uska data la dega map krka
                            .exec();

        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        console.error(error);
        res.status(500)
        .json({
            success:false,
            error:error.message,
            message:"Comment Server Error",
        })
    }
}
