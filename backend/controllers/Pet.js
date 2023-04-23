const Owner = require("../models/Owner");
const Pet = require("../models/Pet");

const getPets = async (req, res) => {
  try {
    console.log("-------------Getting Pets-----------");
    const { username } = req.verified;
    const requiredUser = await Owner.findOne({ username });
    const pets = requiredUser.pets;
    console.log(pets);
    const requiredPets = await Pet.find({
      _id: { $in: pets },
    });
    res.status(200).send(requiredPets);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
  }
};

const getPet = async (req, res) => {
  try {
    console.log("---------------Getting Pet with ID-------------")
    const { id } = req.params
    console.log("id", id)
    const requiredPet = await Pet.findById(id)
    console.log(requiredPet)
    res.status(200).send(requiredPet)
  }
  catch (err) {
    console.log(err);
    res
      .status(500)
      .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
  }
}

const createPet = async (req, res) => {
  try {
    const { name, breed, medicalCondition } = req.body;
    const { username } = req.verified;
    console.log("--------------Creating Pet------------");
    const newPet = new Pet({
      name,
      breed,
      medicalCondition,
    });
    try {
      const savedPet = await newPet.save();
      const requiredUser = await Owner.findOne({ username });
      requiredUser.pets.push(savedPet._id);
      await requiredUser.save();
      console.log(username + " created a new pet in database");
      res.status(200).send(savedPet);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
  }
};

const updatePet = async (req, res) => {
  try {
    const { name, breed, medicalCondition, id } = req.body;
    const { username } = req.verified;
    console.log("--------------Updating Pet-------------");
    const requiredPet = await Pet.findById(id);
    requiredPet.name = name;
    requiredPet.breed = breed;
    requiredPet.medicalCondition = medicalCondition;
    try {
      const savedPet = await requiredPet.save();
      console.log(username + "updated pet with ID " + id);
      res.status(200).send(savedPet);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
  }
};

const deletePet = async (req, res) => {
  try {
    const { id } = req.body;
    const { username } = req.verified;
    console.log("--------------Removing Pet-----------");
    await Pet.findByIdAndDelete(id);
    const requiredOwner = await Owner.findOne({ username });
    await requiredOwner.pets.remove(id);
    res.status(200).send("success");
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
  }
};

const updateRooms = async (req, res) => {
  try {
    const { id, roomNo, roomType } = req.body;
    console.log("----------Updating A Room-----------");
    const requiredPet = await Pet.findById(id);
    requiredPet.room.roomNo = roomNo;
    requiredPet.room.roomType = roomType;
    const savedPet = await requiredPet.save();
    res.status(200).send(savedPet.room);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("Something Went wrong, Please Contact naninarasimha27@gmail.com");
  }
};

module.exports = { createPet, updatePet, deletePet, updateRooms, getPets, getPet };
