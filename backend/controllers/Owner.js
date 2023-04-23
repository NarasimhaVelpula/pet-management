const Owner = require("../models/Owner");

const updateInsurance = async (req, res) => {
  try {
    const { InsuranceName, InsuranceDetails } = req.body;
    const { username } = req.verified;
    console.log("-----------------Updating Insurance----------------");
    const requiredOwner = await Owner.findOne({ username: username });
    //console.log(insuranceName);
    requiredOwner.insurance.InsuranceName = InsuranceName;
    requiredOwner.insurance.InsuranceDetails = InsuranceDetails;
    try {
      const savedOwner = await requiredOwner.save();
      console.log(username + " updated a user insurance in database");
      res.status(200).send(savedOwner);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
    }
  } catch (err) {
    console.log("Some parameter is missing");
    console.log(err);
    res.status(503).send("not a valid request");
  }
};

const getInsurance = async (req, res) => {
  try {
    const { username } = req.verified;
    console.log("-----------------Getting Insurance----------------");
    const requiredOwner = await Owner.findOne({ username: username });
    res.status(200).send(requiredOwner.insurance)
  }
  catch (err) {
    console.log("Some parameter is missing");
    console.log(err);
    res.status(503).send("not a valid request");
  }
}

const updateProfile = async (req, res) => {
  try {
    const { name, mobile, address } = req.body;
    const { username } = req.verified;
    console.log("----------Updating Profile------------------");
    const requiredOwner = await Owner.findOne({ username });
    requiredOwner.name = name;
    requiredOwner.mobile = mobile;
    requiredOwner.address = address;
    try {
      const savedOwner = await requiredOwner.save();
      console.log(username + " updated a user profile in database");
      res.status(200).send(savedOwner);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
    }
  } catch (err) {
    console.log("Some parameter is missing");
    console.log(err);
    res.status(503).send("not a valid request");
  }
};

module.exports = { updateInsurance, updateProfile, getInsurance };
