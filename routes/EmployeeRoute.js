const express=require('express')
 const router=express.Router();
const employeeController=require('../controllers/EmployeeController')
const Employee=require('../models/employ')

router.post('/add-emp',employeeController.createEmployee);

module.exports=router;