// models/FormData.js
const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
});

const formDataSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // User ID from AuthContext
  templateId: { type: String, required: true },
  personalInfo: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    linkedin: { type: String, required: false },
    github: { type: String, required: false },
  },
  careerObjective: { type: String, required: true },
  education: [educationSchema],
  skills: { type: String, required: true },
  projects: [projectSchema],
  languages: { type: String, required: true },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
