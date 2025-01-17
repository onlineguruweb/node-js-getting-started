const Posts = require('../Models/PostModel');
const mongoose = require('mongoose');


const getAllPost = async (req, res) => {
    const posts = await Posts.aggregate([
        {
            $lookup: {
                from: 'users',
                localField: 'createdBy',
                foreignField: '_id',
                as: 'users'
            }
        }
    ]);

    return res.json({ 'status': 'success', 'data': posts });
}

const getPost = async (req, res) => {

    // return res.json(req.params.id)
    const id = mongoose.Types.ObjectId(req.params.id);
    const posts = await Posts.aggregate([
        {
            $match: { _id: id }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'createdBy',
                foreignField: '_id',
                as: 'users'
            }
        }
    ])

    return res.json({ 'status': 'success', 'data': posts });
}


const storePost = async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const createdBy = req.body.createdBy;
    const image = req.body.image;

    const savePosts = await Posts.create({ title, description, createdBy, image });

    return res.json({ 'status': 'success', 'data': savePosts });

}


const updatePost = async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const createdBy = req.body.createdBy;
    const image = req.body.image;

    // return res.json(req.params.id);

    const updatePosts = await Posts.findOneAndUpdate({ _id: req.params.id }, { title, description, createdBy, image }, { new: true });

    return res.json({ 'status': 'success', 'data': updatePosts });

}


const deletePost = async (req, res) => {


    // return res.json(req.params.id);

    const deletePost = await Posts.findOneAndDelete({ _id: req.params.id }, { new: true });

    return res.json({ 'status': 'success', 'message': 'You successfully deleted the posts' });

}


module.exports = { getAllPost, storePost, updatePost, getPost, deletePost }
