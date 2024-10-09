const mongoose = require('mongoose');

const titleSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  templateId: {
    type: String,
    required: true
  },
  title: {
    type: String,
  },
}, { timestamps: true });

const Title = mongoose.model('Title', titleSchema);

module.exports = Title;
