const pet = require("../models/Pet")

const createBill = async (req, res) => {
    try {
      const {id, medicineCharges, roomCharges, docCharges} = req.body;
      // { username } = req.verified;
      console.log("-------------Creating PostCare data-------------------");
      const requiredPet = await pet.findById(id);
      await requiredPet.bill.push({id, medicineCharges, roomCharges, docCharges});
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


  const updateBill = async (req, res) => {
    try {
      const {id, medicineCharges, roomCharges, docCharges, bill_no} = req.body;
      // { username } = req.verified;
      console.log("-------------Updating PostCare History-------------------");
      const requiredPet = await pet.findById(id);
      const bill = await requiredPet.bill.id(
        bill_no
      );
      bill.medicineCharges = medicineCharges;
      bill.roomCharges = roomCharges;
      bill.docCharges = docCharges;
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

  
const deleteBill = async (req, res) => {
  try {
    const { id, medHisId } = req.body;
    console.log("--------------Removing Pet Medical History-----------");
    const requiredPet = await pet.findById(id);
    requiredPet.bill.pull(medHisId)
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
    createBill,
    updateBill,
    deleteBill
  };
