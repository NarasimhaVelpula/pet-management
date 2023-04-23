const router = require("express").Router();
const { updateInsurance, updateProfile, getInsurance } = require("../controllers/Owner");
const tokenValidation = require("./tokenValidation");

router.post("/insurance", tokenValidation, updateInsurance);
router.get("/insurance", tokenValidation, getInsurance);
router.post("/profile", tokenValidation, updateProfile);

module.exports = router;
