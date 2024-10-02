const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
    userId: {
        type: String,
       
      },
    templateId: {
        type: String,
       
      },

      experience: [
        {
          jobTitle: { type: String },
          company: { type: String },
          duration: { type: String },
          responsibilities: [{ type: String }] 
        }
      ]
});
module.exports = mongoose.model("ExperienceSchema", ExperienceSchema);