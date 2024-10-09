const mongoose = require('mongoose');

const AwardsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
    required: true,
  },
  awards: [
    {
      title: {
        type: String,
      },
      year: {
        type: Number,
      },
      organization: {
        type: String,
      },
    },
  ]
}, { timestamps: true }); 

const Award = mongoose.model('Award', AwardsSchema);

module.exports = Award;
