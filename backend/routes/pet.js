const router=require('express').Router();
const { createPet } = require('../controllers/Pet');
const tokenValidation=require('./tokenValidation')

router.post('/',tokenValidation,createPet);

module.exports=router