const { string } = require('joi');
const mongoose = require('mongoose');

const nameContactSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    
  },
  templateId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  contact: {
    phone: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    website: {
      type: String,
    },
  }
}, { timestamps: true });

const NameContact = mongoose.model('NameContact', nameContactSchema);

module.exports = NameContact;
