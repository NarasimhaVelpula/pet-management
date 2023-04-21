const router=require('express').Router();
const {updateInsurance}=require('../controllers/Owner')
const tokenValidation=require('./tokenValidation')

router.post('/insurance',tokenValidation,updateInsurance);

module.exports=router