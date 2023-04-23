const Pet = require("../models/Pet");

const createVaccination = async (req, res) => {
  try {
    console.log("----------Creating Vaccination for Pet--------------");
    const { vaccinationName, vaccinationDate, id } = req.body;
    const requiredPet = await Pet.findById(id);
    await requiredPet.vaccination.push({ vaccinationName, vaccinationDate });
    try {
      const savedPet = await requiredPet.save();
      res.status(200).send(savedPet.vaccination);
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

const updateVaccination = async (req, res) => {
  try {
    const { vaccinationName, vaccinationDate, id } = req.body;
    // { username } = req.verified;
    console.log("-------------Updating Vaccination for a Pet-------------------");
    const requiredPet = await Pet.findById(id);
    const requiredVaccination = await requiredPet.vaccination.id(recordId);
    requiredVaccination.vaccinationName = vaccinationName;
    requiredVaccination.vaccinationDate = vaccinationDate;
    try {
      const savedPet = await requiredPet.save();
      res.status(200).send(savedPet.vaccination);
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

module.exports = { createVaccination, updateVaccination };
