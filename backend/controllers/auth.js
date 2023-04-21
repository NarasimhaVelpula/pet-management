const Owner=require('../models/Owner')
const jwt=require('jsonwebtoken')

const signup=async(req,res)=>{
    try{
    const {username,password,mobile,name,address}=req.body;

    console.log("-----------------------Registering User---------------------")

    // Checking Email Already Exists
    const emailExists=await Owner.findOne({username:username})
    if(emailExists){
        console.log(username+" already exists in database, Failed to register again");
        res.status(400).send("Username Already Exists")
        return
    }

    // New User Creation
    const newOwner=new Owner({
        username,
        password,
        mobile,
        name,
        address
    })

    try{
        const savedOwner=await newOwner.save()
        console.log(username+" created a new user in database")
        res.status(200).send(savedOwner)
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something Went wrong, Please Contact naninarasimha27@gmail.com")
    }
}
catch(err){
    console.log("Some parameter is missing")
    res.status(503).send("not a valid request")
}

}

const login=async (req,res)=>{
    console.log("----------------------Login User-------------------------")
    const {username,password}=req.body;
    const requiredOwner=await Owner.findOne({username:username,password:password})
    if(requiredOwner){
        const token=jwt.sign({username:username,id:requiredOwner._id},process.env.JWT_TOKEN || "epam")
        console.log(username+"Logged in")
        res.status(200).send({token})
    }
    else{
        console.log(username+"User not found")
        res.status(404).send("User not found")
    }
}

module.exports={login,signup}