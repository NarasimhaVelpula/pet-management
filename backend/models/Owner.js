const mongoose = require('mongoose')

const InsuranceSchema = mongoose.Schema({
  InsuranceName: {
    type: String,
    default: ""
  },
  InsuranceDetails: {
    type: String,
    default: ""
  }
})
const OwnerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  pets: {
    type: Array,
    default: []
  },
  insurance: {
    type: InsuranceSchema
  }

})

module.exports = mongoose.model('Owner', OwnerSchema)