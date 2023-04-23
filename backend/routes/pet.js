const router = require("express").Router();
const { createAllergy, updateAllergy } = require("../controllers/Allergy");
const {
  createMedicalHistory,
  updateMedicalHistory,
  deleteMedicalHistory,
} = require("../controllers/MedicalHistory");
const {
  createPet,
  updatePet,
  deletePet,
  updateRooms,
  getPets,
  getPet
} = require("../controllers/Pet");
const { createRecord, updateRecord } = require("../controllers/Record");
const { createVaccination, updateVaccination } = require("../controllers/Vaccination");
const { createMedicine, updateMedicineData } = require("../controllers/Medicine");
const { createRoom, updateRoom } = require("../controllers/Room");
const { createPostCare, updatePostCare } = require("../controllers/PostCare");
const { createBill, updateBill } = require("../controllers/Bill");
const tokenValidation = require("./tokenValidation");

router.post("/", tokenValidation, createPet);
router.get("/", tokenValidation, getPets);
router.get("/:id", tokenValidation, getPet);
router.put("/", tokenValidation, updatePet);
router.delete("/", tokenValidation, deletePet);
router.put("/room", tokenValidation, updateRoom);
router.post("/room", tokenValidation, createRoom);
router.post("/medicalHistory", tokenValidation, createMedicalHistory);
router.delete('/medicalHistory', tokenValidation, deleteMedicalHistory)
router.post("/medicine", tokenValidation, createMedicine);
router.put("/medicine", tokenValidation, updateMedicineData);
router.put("/medicalHistory", tokenValidation, updateMedicalHistory);
router.post("/allergy", tokenValidation, createAllergy);
router.put("/allergy", tokenValidation, updateAllergy);
router.post("/record", tokenValidation, createRecord);
router.put("/record", tokenValidation, updateRecord);
router.post("/vaccination", tokenValidation, createVaccination);
router.put("/vaccination", tokenValidation, updateVaccination)
router.post("/postcare", tokenValidation, createPostCare);
router.put("/postcare", tokenValidation, updatePostCare);
router.post("/bill", tokenValidation, createBill);
router.put("/bill", tokenValidation, updateBill);


module.exports = router;
