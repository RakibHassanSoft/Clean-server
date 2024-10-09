const express = require("express");
const {
  createExperience,
  getExperience,
  updateExperienceById,
  deleteExperienceById,
} = require("./ExperienceController");

const router = express.Router();
//      post route
router.post("/experience", createExperience);
//     get route
router.get("/experience/:id/:templateId", getExperience);
//  update route
router.patch("/experience/:id/:templateId", updateExperienceById);


//  delete route
router.delete("/experience/:id/:templateId", deleteExperienceById);

module.exports = router;
