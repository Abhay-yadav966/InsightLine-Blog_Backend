

// import the models

const Post = require("../models/postModel");
const Like = require("../models/likeModel");


exports.createLike = async (req, res) => {

    try{
        // fetch data from request
        const {post, user} = req.body;


        // creating a Like
        const savedLike = await Like.create({post, user});

        // find the post by its id and update Like into its like's array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {like: savedLike._id}}, {new:true} ).populate("like").exec();


        res.status(200)
        .json({
            updatedPost,
        });

    }
    catch(error){
        console.error(error);
        res.status(500)
        .json({
            success:false,
            error:error.message,
            message:"Error occured at creating Like"
        });
    }
}



// unlike the post
exports.unLike = async (req, res) => {
    try{
        // frtching data from the request body
        const {post, like} = req.body;

        // delete like 
        const deletedLike = await Like.findByIdAndDelete(like); // alternate function of findByIdAndDelete is findOneAndDelete({post:post, _id:like})

        // delete like from the post 
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {like: deletedLike._id}}, {new:true});

        res.status(200)
        .json({
            updatedPost,
            message:"Like has been deleted from post wla like ka array"
        });
    }
    catch(error){
        console.error(error);
        res.status(500)
        .json({
            success:false,
            error:error.message,
            message:"Error occured the UnLikeing "
        });
    }
}