const pet = require("../models/Pet")

const createRoom = async (req, res) => {
    try {
      console.log(req.body)
      const { id, roomType, roomNo } = req.body;
      // { username } = req.verified;
      console.log("-------------Creating medical data-------------------");
      const requiredPet = await pet.findById(id);
      await requiredPet.rooms.push({id, roomType, roomNo });
      try {
        const savedPet = await requiredPet.save();
        res.status(200).send(savedPet.rooms);
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


  const updateRoom = async (req, res) => {
    try {
      const { roomType, roomNo } = req.body;
      // { username } = req.verified;
      console.log("-------------Updating medical History-------------------");
      const requiredPet = await pet.findById(id);
      const medicineHistory = await requiredPet.rooms.id(
        _id
      );
      medicineHistory.roomNo = roomNo;
      medicineHistory.roomType = roomType;
      try {
        const savedPet = await requiredPet.save();
        res.status(200).send(savedPet.rooms);
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
  
  module.exports = {
    createRoom,
    updateRoom
  };
