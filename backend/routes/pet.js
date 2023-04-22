const router = require("express").Router();
const { createAllergy, updateAllergy } = require("../controllers/Allergy");
const {
  createMedicalHistory,
  updateMedicalHistory,
} = require("../controllers/MedicalHistory");
const {
  createPet,
  updatePet,
  deletePet,
  updateRoom,
  getPets
} = require("../controllers/Pet");
const { createRecord, updateRecord } = require("../controllers/Record");
const tokenValidation = require("./tokenValidation");

router.post("/", tokenValidation, createPet);
router.get("/", tokenValidation, getPets);
router.put("/", tokenValidation, updatePet);
router.delete("/", tokenValidation, deletePet);
router.post("/room", tokenValidation, updateRoom);
router.post("/medicalHistory", tokenValidation, createMedicalHistory);
router.put("/medicalHistory", tokenValidation, updateMedicalHistory);
router.post("/allergy", tokenValidation, createAllergy);
router.put("/allergy", tokenValidation, updateAllergy);
router.post("/record", tokenValidation, createRecord);
router.put("/record", tokenValidation, updateRecord);

module.exports = router;
