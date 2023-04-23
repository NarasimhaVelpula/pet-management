const Pet = require("../models/Pet");

const createAllergy = async (req, res) => {
  try {
    console.log("----------Creating Allergy for Pet--------------");
    const { allergyName, dateEffected, severity, id } = req.body;
    const requiredPet = await Pet.findById(id);
    await requiredPet.allergies.push({ allergyName, dateEffected, severity });
    try {
      const savedPet = await requiredPet.save();
      res.status(200).send(savedPet.allergies);
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

const updateAllergy = async (req, res) => {
  try {
    const { id, allergyName, dateEffected, severity, allergyId } = req.body;
    // { username } = req.verified;
    console.log("-------------Updating Allergy for a Pet-------------------");
    const requiredPet = await Pet.findById(id);
    const requiredAllergy = await requiredPet.allergies.id(allergyId);
    requiredAllergy.allergyName = allergyName;
    requiredAllergy.dateEffected = dateEffected;
    requiredAllergy.severity = severity;
    try {
      const savedPet = await requiredPet.save();
      res.status(200).send(savedPet.allergies);
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


const deleteAllergies = async (req, res) => {
  try {
    const { id, medHisId } = req.body;
    console.log("--------------Removing Pet Medical History-----------");
    const requiredPet = await Pet.findById(id);
    requiredPet.allergies.pull(medHisId)
    await requiredPet.save()
    res.status(200).send("success");
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
  }
}
module.exports = { createAllergy, updateAllergy, deleteAllergies };
