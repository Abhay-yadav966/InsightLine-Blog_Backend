
// import the express router

const express = require("express");
const router = express.Router();


// import controllers

const {createComment} = require("../controllers/commentController");
const {createPost} = require("../controllers/postController");
const {getAllPost} = require("../controllers/postController");
const {createLike} = require("../controllers/likeController");
const {unLike} = require("../controllers/likeController");


// mapping create
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPost);
router.post("/likes/like", createLike);
router.post("/likes/unlike", unLike);



// export
module.exports = router; 