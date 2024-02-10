// import the model
const Post = require("../models/postModel");


// Creating a Post
exports.createPost = async  (req, res) => {
    try{
        // fetch data from request body
        const {title, body} = req.body;

        // inserting post in DB 
        const savedPost = await Post.create({title, body});

        res.json({
            success:true,
            data:savedPost,
            message:"Post Inserted SuccessFully"
        });
    }
    catch(error){
        console.error(error); 
        res.status(500)
        .json({
            success:false,
            error:error.message,
            message:"Post Server Error"
        })
    } 
}


// Fetching all posts

exports.getAllPost = async (req, res) => {
    try{
        const allPosts = await Post.find({}).populate("comments").populate("like").exec();
    
        res.status(200)
        .json({
            allPosts,
        });
    }
    catch(error){
        console.error(error);
        res.status(500)
        .json({
            success:false,
            error:error.message,
            message:"Error occured in fetching all Posts"
        });
    }

}