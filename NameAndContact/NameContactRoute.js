const express = require('express');
const {
  createNameContact,
  getAllNameContacts,
  getNameContactById,
  updateNameContact,
  deleteNameContact,
} = require('./NameContactController');

const router = express.Router();

// Create a new name contact entry
router.post('/NameAndContact', createNameContact);

// Get a specific name contact entry by ID
router.get('/NameAndContact/:id/:templateId', getNameContactById);

// Update a name contact entry by ID
router.put('/NameAndContact/:id/:templateId', updateNameContact);

// Delete a name contact entry by ID
router.delete('/name-contact/:id:templateId', deleteNameContact);

module.exports = router;
