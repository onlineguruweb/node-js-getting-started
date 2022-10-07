const graphql = require('graphql');
const {GraphQLID,GraphQLString,GraphQLList,GraphQLNonNull,GraphQLObjectType,GraphQLSchema} = graphql;
const Posts = require("../Models/PostModel");
const Users = require("../Models/UserModel");

const PostType = new GraphQLObjectType({
    name:"postType",
    fields:()=>({
        id:{type:GraphQLID},
        title:{type:GraphQLString},
        description:{type:GraphQLString},
        image:{type:GraphQLString}
    })
})

const UserType = new GraphQLObjectType({
    name:"userType",
    fields:()=>({
        id:{type:GraphQLID},
        email:{type:GraphQLString}
    })
})

const rootQuery = new GraphQLObjectType({
    name:"query",
    fields:{
        posts:{
            type:new GraphQLList(PostType),
            resolve(parent,args){
                return Posts.find({});
            }
        },
        authors:{
            type:new GraphQLList(UserType),
            resolve(parent,args){
                return Users.find({})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:rootQuery
})