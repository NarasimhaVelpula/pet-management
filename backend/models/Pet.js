const mongoose = require("mongoose");

const MedicalHistorySchema = mongoose.Schema({
  doctorName: String,
  diagnosis: String,
});

const VaccinationSchema = mongoose.Schema({
  vaccinationName: String,
  vaccinationDate: Date,
});

const AllergySchema = mongoose.Schema({
  allergyName: String,
  dateEffected: Date,
  severity: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Low",
  },
});

const RecordSchema = mongoose.Schema({
  recordName: String,
  admitDate: Date,
  dischargeDate: Date,
});

const RoomSchema = mongoose.Schema({
  roomNo: Number,
  roomType: String,
});

const MedicineSchema = mongoose.Schema({
  name: String,
  quantity: String,
  price: Number,
});

const PostCareSchema = mongoose.Schema({
  food:String,
  medicines:String,
});

const BillSchema = mongoose.Schema({
  medicineCharges:String,
  roomCharges:String,
  docCharges:String,
});


const PetSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  medicalCondition: {
    type: String,
    enum: ["Diagnosed", "Undiagnosed"],
    default: "Undiagnosed",
  },
  medicalHistory: {
    type: [MedicalHistorySchema],
    default: [],
  },
  medicine: {
    type: [MedicineSchema],
    default: []
  },
  vaccination: {
    type: [VaccinationSchema],
    default: [],
  },
  allergies: {
    type: [AllergySchema],
    default: [],
  },
  records: {
    type: [RecordSchema],
    default: [],
  },
  rooms: {
    type: [RoomSchema],
    default: [],
  },
  postcare: {
    type: [PostCareSchema],
    default: [],
  },
  bill: {
    type: [BillSchema],
    default: [],
  }
});

module.exports = mongoose.model("PET", PetSchema);
