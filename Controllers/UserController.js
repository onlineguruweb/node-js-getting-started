const User = require('../Models/UserModel');
const sha1= require("sha1");

const getUser = async (req,res) =>{
    const users = await User.find({});
    res.json({'status':'success','data':users});
}

const register = async (req,res) =>{
    const email = req.body.email;
    const password = sha1(req.body.password);
    const name = req.body.name;
    const mobile = req.body.mobile;

    const check = await User.find({email:email});

    if(check.length>0)
    {
        return res.json({"status":"failed","message":"Users already registered"});
    }
    else
    {
        const users = await User.create({email:email,password:password,name:name,mobile});
        if(users)
        {
            res.json({"status":"success","data":users});
        }
        else
        {
            res.json({"status":"failed","message":"error in registeration"});
        }
    }   
}

const login = async (req,res) =>{
    const email = req.body.email;
    const password = sha1(req.body.password);
    const token = sha1(email);
    const check = await User.find({email:email,password});
    if(check.length>0)
    {
        const update_token = await User.findOneAndUpdate({email:email},{token:token},{new:true});

        res.json({"status":"success","data":check});

    }
    else
    {
        res.json({"status":"failed","message":"please check the credentials"});
    }
}

module.exports = {getUser,register,login};
