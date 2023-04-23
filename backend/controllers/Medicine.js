const pet = require("../models/Pet")

const createMedicine = async (req, res) => {
    try {
      console.log(req.body)
      const { id, name, quantity, price } = req.body;
      // { username } = req.verified;
      console.log("-------------Creating medical data-------------------");
      const requiredPet = await pet.findById(id);
      console.log(requiredPet)
      await requiredPet.medicine.push({id, name, quantity, price });
      try {
        const savedPet = await requiredPet.save();
        res.status(200).send(savedPet.medicine);
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


  const updateMedicineData = async (req, res) => {
    try {
      const { medicine_id, name, quantity, price } = req.body;
      // { username } = req.verified;
      console.log("-------------Updating medical History-------------------");
      const requiredPet = await Pet.findById(id);
      const medicineHistory = await requiredPet.medicine.id(
        medicine_id
      );
      medicineHistory.name = name;
      medicineHistory.quantity = quantity;
      medicineHistory.price = price;
      try {
        const savedPet = await requiredPet.save();
        res.status(200).send(savedPet.medicine);
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
    createMedicine,
    updateMedicineData
  };
