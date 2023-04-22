const pet = require("../models/Pet")

const createPostCare = async (req, res) => {
    try {
      const { medical_id, food, medicines} = req.body;
      // { username } = req.verified;
      console.log("-------------Creating PostCare data-------------------");
      const requiredPet = await Pet.findById(id);
      await requiredPet.post_care.push({medical_id, food, medicines});
      try {
        const savedPet = await requiredPet.save();
        res.status(200).send(savedPet.post_care);
      } catch (err) {
        console.log(err);
        res
          .status(500)
          .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
      }
    } catch (err) {
      console.log("Some parameter is missing");
      res.status(503).send("not a valid request");
    }
  };


  const updatePostCareCentre = async (req, res) => {
    try {
        const { medical_id, food, medicines} = req.body;
      // { username } = req.verified;
      console.log("-------------Updating PostCare History-------------------");
      const requiredPet = await Pet.findById(id);
      const post_care = await requiredPet.post_care.id(
        medical_id
      );
      post_care.food = food;
      post_care.medicines = medicines;
      try {
        const savedPet = await requiredPet.save();
        res.status(200).send(savedPet.post_care);
      } catch (err) {
        console.log(err);
        res
          .status(500)
          .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
      }
    } catch (err) {
      console.log("Some parameter is missing");
      res.status(503).send("not a valid request");
    }
  };
  
  module.exports = {
    createPostCare,
    updatePostCareCentre,
  };
