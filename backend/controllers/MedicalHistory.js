const Pet = require("../models/Pet");

const createMedicalHistory = async (req, res) => {
  try {
    console.log(req.body)
    const { id, doctorName, diagnosis } = req.body;
    // { username } = req.verified;
    console.log("-------------Creating medical History-------------------");
    const requiredPet = await Pet.findById(id);
    await requiredPet.medicalHistory.push({ doctorName, diagnosis });
    try {
      const savedPet = await requiredPet.save();
      res.status(200).send(savedPet.medicalHistory);
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

const updateMedicalHistory = async (req, res) => {
  try {
    const { id, doctorName, diagnosis, medHisId } = req.body;
    // { username } = req.verified;
    console.log("-------------Updating medical History-------------------");
    const requiredPet = await Pet.findById(id);
    const requiredMedicalHistory = await requiredPet.medicalHistory.id(
      medHisId
    );
    requiredMedicalHistory.doctorName = doctorName;
    requiredMedicalHistory.diagnosis = diagnosis;
    try {
      const savedPet = await requiredPet.save();
      res.status(200).send(savedPet.medicalHistory);
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

const deleteMedicalHistory = async (req, res) => {
  try {
    const { id, medHisId } = req.body;
    console.log("--------------Removing Pet Medical History-----------");
    const requiredPet = await Pet.findById(id);
    requiredPet.medicalHistory.pull(medHisId)
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
  createMedicalHistory,
  updateMedicalHistory,
  deleteMedicalHistory
};
