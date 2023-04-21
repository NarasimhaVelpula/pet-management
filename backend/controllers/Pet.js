const Owner = require('../models/Owner')
const Pet=require('../models/Pet')

const createPet=async(req,res)=>{
    try{
        const {name,breed}=req.body
        const {username}=req.verified
        console.log("--------------Creating Pet------------")
        const newPet= new Pet({
            name,breed
        })
        try{
            const savedPet=await newPet.save()
            const requiredUser=await Owner.findOne({username})
            requiredUser.pets.push(savedPet._id)
            await requiredUser.save()
            console.log(username+" created a new pet in database")
            res.status(200).send(savedPet)
        }
        catch(err){
            console.log(err);
            res.status(500).send("Something Went wrong, Please Contact naninarasimha27@gmail.com")
        }
    }
    catch(err){
        console.log(err)
        res.status(500).send("Something Went wrong, Please Contact naninarasimha27@gmail.com")
    }
}

module.exports={createPet}