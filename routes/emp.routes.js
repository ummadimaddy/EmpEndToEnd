const express = require("express");
//in order to create your own router.
//Creating Router() object
const router =  express.Router();
const empController = require("../controllers/emp.controller");

//!   http://localhost:3000/api/employes
router
   .route('/employes')
   .get(empController.getEmps)
   .post(empController.postEmps);

//!   http://localhost:3000/employes/id
router
   .route('/employes/:id')
   .put(empController.putEmps)
   .delete(empController.deleteEmps);

   module.exports={
       empRouter:router
   };
