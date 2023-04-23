const pet = require("../models/Pet")

const createPostCare = async (req, res) => {
    try {
      const {id, food, medicines} = req.body;
      // { username } = req.verified;
      console.log("-------------Creating PostCare data-------------------");
      console.log(req.body)
      const requiredPet = await pet.findById(id);
      await requiredPet.postcare.push({id,food, medicines});
      try {
        const savedPet = await requiredPet.save();
        res.status(200).send(savedPet.postcare);
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


  const updatePostCare = async (req, res) => {
    try {
        const { postCare_id,food, medicines,id} = req.body;
      // { username } = req.verified;
      console.log("-------------Updating PostCare History-------------------");
      const requiredPet = await pet.findById(id);
      const post_care = await requiredPet.postcare.id(
        postCare_id
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

  const deletePostCare = async (req, res) => {
    try {
      const { id, medHisId } = req.body;
      console.log("--------------Removing Pet Medical History-----------");
      const requiredPet = await pet.findById(id);
      requiredPet.postcare.pull(medHisId)
      await requiredPet.save()
      res.status(200).send("success");
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
    }
  }
  
  module.exports = {
    createPostCare,
    updatePostCare,
    deletePostCare
  };
