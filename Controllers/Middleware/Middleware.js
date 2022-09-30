
const User = require('../../Models/UserModel');
const PostMiddleware = async (req,res,next) =>{
     if(req.headers.authorization)
     {
        const tokens = req.headers.authorization.split(' ')[1];

        const users = await User.find({token:tokens});
        if(users.length)
        {
            return next();
        }
        return res.json("You are token is invalid");
        // return next();
     }
     return res.json("You are not authorized to "+req.method+" posts");
}



module.exports = PostMiddleware;