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
      const { roomId, roomType, roomNo, id } = req.body;
      // { username } = req.verified;
      console.log("-------------Updating medical History-------------------");
      const requiredPet = await pet.findById(id);
      const medicineHistory = await requiredPet.rooms.id(
        roomId
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

  const deleteRoom = async (req, res) => {
    try {
      const { id, medHisId } = req.body;
      console.log("--------------Removing Pet Medical History-----------");
      const requiredPet = await pet.findById(id);
      requiredPet.rooms.pull(medHisId)
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
    createRoom,
    updateRoom,
    deleteRoom
  };
