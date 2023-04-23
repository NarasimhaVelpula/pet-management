const router = require("express").Router();
const { createAllergy, updateAllergy, deleteAllergies } = require("../controllers/Allergy");
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
const { createRecord, updateRecord, deleteRecord } = require("../controllers/Record");
const { createVaccination, updateVaccination, deleteVaccination } = require("../controllers/Vaccination");
const { createMedicine, updateMedicineData,deleteMedicine } = require("../controllers/Medicine");
const { createRoom, updateRoom, deleteRoom } = require("../controllers/Room");
const { createPostCare, updatePostCare, deletePostCare } = require("../controllers/PostCare");
const { createBill, updateBill, deleteBill } = require("../controllers/Bill");
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
router.delete('/allergy', tokenValidation, deleteAllergies)
router.delete('/bill',tokenValidation, deleteBill)
router.delete('/medicine',tokenValidation, deleteMedicine)
router.delete('/postcare', tokenValidation, deletePostCare)
router.delete('/record', tokenValidation, deleteRecord)
router.delete('/room', tokenValidation, deleteRoom)
router.delete('/vaccination', tokenValidation, deleteVaccination)
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
