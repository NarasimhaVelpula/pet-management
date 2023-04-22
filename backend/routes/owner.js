const router = require("express").Router();
const { updateInsurance, updateProfile } = require("../controllers/Owner");
const tokenValidation = require("./tokenValidation");

router.post("/insurance", tokenValidation, updateInsurance);
router.post("/profile", tokenValidation, updateProfile);

module.exports = router;
