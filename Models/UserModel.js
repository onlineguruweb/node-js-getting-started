const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModel = new Schema(
    {
        name:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true
        },
        mobile:{
            type:String,
            require:true
        },
        token:{
            type:String
        }

    },
    {timestamps:true}
);

module.exports = mongoose.model('users',UserModel);