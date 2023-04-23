const Pet = require("../models/Pet");

const createRecord = async (req, res) => {
  try {
    console.log("----------Creating Record for Pet--------------");
    const { recordName, admitDate, dischargeDate, id } = req.body;
    const requiredPet = await Pet.findById(id);
    await requiredPet.records.push({ recordName, admitDate, dischargeDate });
    try {
      const savedPet = await requiredPet.save();
      res.status(200).send(savedPet.records);
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

const updateRecord = async (req, res) => {
  try {
    const { id, recordName, admitDate, dischargeDate, recordId } = req.body;
    // { username } = req.verified;
    console.log("-------------Updating Record for a Pet-------------------");
    const requiredPet = await Pet.findById(id);
    const requiredRecord = await requiredPet.records.id(recordId);
    requiredRecord.recordName = recordName;
    requiredRecord.admitDate = admitDate;
    requiredRecord.dischargeDate = dischargeDate;
    try {
      const savedPet = await requiredPet.save();
      res.status(200).send(savedPet.records);
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

const deleteRecord = async (req, res) => {
  try {
    const { id, medHisId } = req.body;
    console.log("--------------Removing Pet Medical History-----------");
    const requiredPet = await Pet.findById(id);
    requiredPet.records.pull(medHisId)
    await requiredPet.save()
    res.status(200).send("success");
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
  }
}

module.exports = { createRecord, updateRecord, deleteRecord };
