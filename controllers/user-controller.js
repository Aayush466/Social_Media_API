import User from "../model/User";
import bcrypt from 'bcryptjs'
export const getAllUser = async(req,res,next)=>{
    let users;
    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"no users found "})
    }
    return res.status(200).json({users});
}

export const signup = async(req,res,next)=>{
    const{name,email,password}= req.body;

    let existinguser;
    try{
        existinguser = await User.findOne({email});
    }catch(err){
        comsole.log(err)
    }
    if(existinguser){
        return res.status(400).json({message:"User Already exist! login Instead "})
    }
    const hashedPassword = bcrypt.hashSync(password);
    const user = newUser({
        name,
        email,
        password:hashedPassword,
        blogs:[]
    });
  
    try{
        await user.save();
    }catch(err){
        return console.log(err);
    }
    return res.status(201).json({user})
}

export const login = async(req,res,next)=>{
    const{email,password}= req.body;
    let existinguser;
    try{
        existinguser = await User.findOne({email});
    }catch(err){
        comsole.log(err)
    }
    if(existinguser){
        return res
        .status(400)
        .json({message:"Couldnt find user by this email "})
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existinguser.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message:"incorrect password "})
    }
    return res.status(200).json({message:"login sucessfull"})
}