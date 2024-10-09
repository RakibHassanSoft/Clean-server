const express = require("express");
const {
  createLanguage,
  getLanguagesByUserId,
  updateLanguages,
  deleteLanguages,
} = require("./LanguagesController");

const router = express.Router();
//      post route
router.post("/Language", createLanguage);
// Get languages data by userId and templateId

router.get("/Language/:id/:templateId", getLanguagesByUserId);
// Update languages data for a user
router.patch("/Language/:id/:templateId", updateLanguages);

// Delete languages data for a user
router.delete("/Language/:id/:templateId", deleteLanguages);

module.exports = router;
