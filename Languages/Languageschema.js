
const mongoose = require("mongoose");

const LanguagesSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  templateId: {
    type: String,
  },
  languages: [{ type: String }],
});
module.exports = mongoose.model("LanguagesSchema", LanguagesSchema);
