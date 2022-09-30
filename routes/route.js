const express = require('express');

const router = express.Router();
const {getUser, register, login}     =  require("../Controllers/UserController");
const {getAllPost,storePost,updatePost,getPost,deletePost} = require('../Controllers/PostController');
const PostMiddleware = require("../Controllers/Middleware/Middleware");


router.get("/users",getUser)

router.post("/register",register);

router.post("/login",login);


router.get("/posts",getAllPost);

router.get("/post/:id",getPost);

router.post("/posts",PostMiddleware,storePost);

router.post('/posts/:id',PostMiddleware,updatePost);

router.delete("/post/:id",PostMiddleware,deletePost);

module.exports = router;