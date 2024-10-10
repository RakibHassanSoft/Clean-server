const mongoose = require('mongoose');

const jobPostingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  employmentType: {
    type: String,
    required: true
  },
  salaryRange: {
    type: String, // Consider changing this to Number if appropriate
    required: true
  },
  remoteOption: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  responsibilities: {
    type: [String],
    required: true,
    default: [] // Changed to an empty array
  },
  requirements: {
    type: [String],
    required: true,
    default: [] // Changed to an empty array
  },
  skills: {
    type: [String],
    required: true,
    default: [] // Changed to an empty array
  },
  applySection: {
    callToAction: {
      type: String,
      required: true
    },
    applyLinkText: {
      type: String,
    
    },
    applyLink: {
      type: String,
      required: true
    }
  }
}, {
  timestamps: true
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

module.exports = JobPosting;
