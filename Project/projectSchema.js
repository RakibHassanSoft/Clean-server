const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
    required: true,
  },
  projects: [
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
    }
  ]
  
}, { timestamps: true });

const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;
