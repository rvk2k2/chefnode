const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken')


const handleRegister = async (req,res)=>{
    
   try{
    const {userName, email, password} = req.body;
    
    const exisitingUser = await  User.findOne({email});
    if(exisitingUser) return res.status(400).json({ message: "user already exist"});

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        userName: userName,
        email: email,
        password: hashedPassword
    })
     res.status(200).json({ message: "user registered successfully"});
   }
   catch(err){
    res.status(500).json({message: "error from server"})
   }
   
}


const handleLogIn = async(req, res) =>{
    try{
        
       const {userName , password} = req.body;
       
       const user = await User.findOne({ userName });
       if(!user) return res.status(400).json({message: "user does not exist"})
       
        //compare password 
       const isMatch = await bcrypt.compare(password,user.password);
       if(!isMatch) return res.status(400).json({ message : "invalid credentials"});
 
       //genrate token 
       const token  = jwt.sign({id: user._id},process.env.JWT_SECRET,{ expiresIn: '2h' });

         res.status(200).json({token , user: {id: user._id, userName: user.userName, email:user.email}});    
    }
    catch(err){
        res.status(500).json({message :"error from the server"})
    }
}

module.exports = {
    handleRegister,
    handleLogIn,
}

