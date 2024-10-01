
const express = require( "express");
const { CreateEducation, getEducations, updateEducation, deleteEducation } = require("./EducationController");
const authMiddleware = require("../Middelware/Middleware");
const router = express.Router();
//      post route
 router.post("/CreateEducation",authMiddleware, CreateEducation)
//     get route
 router.get("/getEducations",authMiddleware, getEducations)
//  update route
router.patch("/updateEducation/:id",updateEducation)
//  delete route
router. delete("/deleteEducation/:id",deleteEducation)

 module.exports=router
