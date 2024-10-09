const Award = require("./AwardsSchema");

// Create a new award
exports.createAward = async (req, res) => {
  try {
    const { awards, userId, templateId } = req.body;

    // Validate that 'awards' is an array
    if (!awards || !Array.isArray(awards)) {
      return res.status(400).json({ message: 'Awards must be an array' });
    }

    // Validate that userId and templateId are provided
    if (!userId || !templateId) {
      return res.status(400).json({ message: 'User ID and Template ID are required' });
    }

    // Check if an award with the same userId and templateId already exists
    const existingAward = await Award.findOne({ userId, templateId });
    if (existingAward) {
      return res.status(409).json({ message: 'Award with this User ID and Template ID already exists' });
    }

    // Create a new award entry in the database
    const newAward = new Award({ awards, userId, templateId });
    await newAward.save();

    // Respond with success and the newly created award
    res.status(201).json({ message: 'Award created successfully', award: newAward });
  } catch (error) {
    // Respond with error in case of failure
    res.status(500).json({ message: 'Error creating award', error: error.message });
  }
};

// Get a awards for a user and that template
exports.getAllAwards = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from request parameters
    const awards = await Award.find({ userId: id, templateId: templateId }) // Find awards by userId and templateId
      .populate('userId', 'name email'); // Populate user details if needed

    if (awards.length === 0) {
      return res.status(404).json({ message: 'No awards found for this user and template.' });
    }

    res.status(200).json(awards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching awards', error });
  }
};


// Get a specific award by userId and templateId
exports.getAwardById = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from request parameters
    const award = await Award.findOne({ userId: id, templateId: templateId })
    if (!award) {
      return res.status(404).json({ message: 'Award not found for this user and template.' });
    }

    return res.status(200).json(award);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching award', error: error.message });
  }
};

// Update an award by userId and templateId
exports.updateAward = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from request parameters
    const updatedAward = await Award.findOneAndUpdate(
      { userId: id, templateId: templateId }, // Find the award by userId and templateId
      req.body, 
      { new: true, runValidators: true } // Return the updated document and validate
    );

    if (!updatedAward) {
      return res.status(404).json({ message: 'Award not found for this user and template.' });
    }

    return res.status(200).json({ message: 'Award updated successfully', award: updatedAward });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating award', error: error.message });
  }
};

// Delete an award by userId and templateId
exports.deleteAward = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from request parameters
    const deletedAward = await Award.findOneAndDelete({ userId: id, templateId: templateId });

    if (!deletedAward) {
      return res.status(404).json({ message: 'Award not found for this user and template.' });
    }

    return res.status(200).json({ message: 'Award deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting award', error: error.message });
  }
};
