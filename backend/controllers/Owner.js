
const Owner=require('../models/Owner')
const jwt=require('jsonwebtoken')

const updateInsurance=async (req,res)=>{
    try{
        const {insuranceName,insuranceDetails}=req.body
        const {username}=req.verified
        console.log("-----------------Updating Insurance----------------")
        const requiredOwner=await Owner.findOne({username:username})
        requiredOwner.insurance={
            insuranceName,insuranceDetails
        }
        try{
            //await requiredInsurance.save()
            console.log(requiredOwner)
            const savedOwner=await requiredOwner.save()
            console.log(username+" updated a user insurance in database")
            res.status(200).send(savedOwner)
        }
        catch(err){
            console.log(err);
            res.status(500).send("Something Went wrong, Please Contact naninarasimha27@gmail.com")
        }
    }
    catch(err){
        console.log("Some parameter is missing")
        console.log(err)
        res.status(503).send("not a valid request")
    }
}

module.exports={updateInsurance}