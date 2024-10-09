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
    type: String, // You can adjust this to Number if you prefer
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
    default: ['']
  },
  requirements: {
    type: [String],
    required: true,
    default: ['']
  },
  skills: {
    type: [String],
    required: true,
    default: ['']
  },
  applySection: {
    callToAction: {
      type: String,
      required: true
    },
    applyLinkText: {
      type: String,
      required: true
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
