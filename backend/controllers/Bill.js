const pet = require("../models/Pet")

const createBill = async (req, res) => {
    try {
      const { bill_no, medicine_charges, room_charges, doc_charges} = req.body;
      // { username } = req.verified;
      console.log("-------------Creating PostCare data-------------------");
      const requiredPet = await Pet.findById(id);
      await requiredPet.bill.push({bill_no, medicine_charges, room_charges, doc_charges});
      try {
        const savedPet = await requiredPet.save();
        res.status(200).send(savedPet.bill);
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
        const { bill_no, medicine_charges, room_charges, doc_charges} = req.body;
      // { username } = req.verified;
      console.log("-------------Updating PostCare History-------------------");
      const requiredPet = await Pet.findById(id);
      const bill = await requiredPet.bill.id(
        bill_no
      );
      bill.medicine_charges = medicine_charges;
      bill.room_charges = room_charges;
      bill.doc_charges = doc_charges;
      try {
        const savedPet = await requiredPet.save();
        res.status(200).send(savedPet.bill);
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
