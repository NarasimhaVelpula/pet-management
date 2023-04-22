const pet = require("../models/Pet")

const createPayment = async (req, res) => {
    try {
      const { payment_id, payment_type, status} = req.body;
      // { username } = req.verified;
      console.log("-------------Creating payment data-------------------");
      const requiredPet = await Pet.findById(id);
      await requiredPet.payment.push({payment_id, payment_type, status});
      try {
        const savedPet = await requiredPet.save();
        res.status(200).send(savedPet.payment);
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


  const updatePayment = async (req, res) => {
    try {
        const { payment_id, payment_type, status} = req.body;
      // { username } = req.verified;
      console.log("-------------Updating Payment History-------------------");
      const requiredPet = await Pet.findById(id);
      const payment = await requiredPet.payment.id(
        payment_id
      );
      payment.payment_type = payment_type;
      payment.status = status;
      try {
        const savedPet = await requiredPet.save();
        res.status(200).send(savedPet.payment);
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
    createPayment,
    updatePayment,
  };
