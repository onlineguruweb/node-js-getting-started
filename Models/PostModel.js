const mongoose = require('mongoose');

const PostSchema = mongoose.Schema;

const PostModel = new PostSchema(
    {
        title:{
            type:String,
            require:true,
            index:true,
            min:10,
            unique:true
        },
        description:{
            type:String,
            index:true,
            require:true,
            max:2500
        },
        image:{
            type:String,
            index:true,
        },
        createdBy:{
            type:PostSchema.Types.ObjectId
        },
        status:{
            type:Boolean,
            select:0
        }
        
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('posts',PostModel);

