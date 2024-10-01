const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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
  ,
  userId: {
    type: String,
  },
  templateId: {
    type: String,
  }
}, { timestamps: true });

const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;
