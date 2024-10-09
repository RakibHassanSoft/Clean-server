const mongoose = require('mongoose');

const careerObjectiveSchema = new mongoose.Schema({
  title: {
    type: String
  },
  userId: {
    type: String,
    required: true,
    
  },
  careerObjective: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
    required: true,
  }
  
}, { timestamps: true });

const CareerObjective = mongoose.model('CareerObjective', careerObjectiveSchema);

module.exports = CareerObjective;
