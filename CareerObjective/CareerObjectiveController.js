const CareerObjective = require("./careerObjectiveSchema");


// Create a new career objective
exports.createCareerObjective = async (req, res) => {
  try {
    const { careerObjective, templateId, title, userId } = req.body; // Make sure userId is included

    // Check if an objective with the given userId and templateId already exists
    const existingObjective = await CareerObjective.findOne({ userId, templateId });

    if (existingObjective) {
      return res.status(400).json({ message: 'Career Objective already exists for this user and template.' });
    }

    // Create and save the new career objective
    const newCareerObjective = new CareerObjective({ careerObjective, templateId, title, userId });
    await newCareerObjective.save();
    
    return res.status(201).json({ message: 'Career Objective created successfully', careerObjective: newCareerObjective });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating Career Objective', error: error.message });
  }
};



// Get a specific career objective by userId and templateId
exports.getCareerObjectiveById = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from request parameters

    // Use findOne to find the document by userId and templateId
    const careerObjective = await CareerObjective.findOne({ userId: id, templateId });

    if (!careerObjective) {
      return res.status(404).json({ message: 'Career Objective not found' });
    }

    res.status(200).json(careerObjective);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Career Objective', error });
  }
};


// Update a career objective by userId and templateId
exports.updateCareerObjective = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from request parameters

    // Use findOneAndUpdate to update the document by userId and templateId
    const updatedCareerObjective = await CareerObjective.findOneAndUpdate(
      { userId: id, templateId }, // Find by userId and templateId
      req.body, // Update with request body
      { new: true, runValidators: true } // Return the updated document and run validators
    );

    if (!updatedCareerObjective) {
      return res.status(404).json({ message: 'Career Objective not found' });
    }

    res.status(200).json({ message: 'Career Objective updated successfully', careerObjective: updatedCareerObjective });
  } catch (error) {
    res.status(500).json({ message: 'Error updating Career Objective', error });
  }
};

// Delete a career objective by userId and templateId
exports.deleteCareerObjective = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from request parameters

    // Use findOneAndDelete to find and delete the document by userId and templateId
    const deletedCareerObjective = await CareerObjective.findOneAndDelete({ userId: id, templateId });

    if (!deletedCareerObjective) {
      return res.status(404).json({ message: 'Career Objective not found' });
    }

    res.status(200).json({ message: 'Career Objective deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Career Objective', error });
  }
};

// Get career objectives
exports.getAllCareerObjectives = async (req, res) => {
  try {
    const careerObjectives = await CareerObjective.find();
    res.status(200).json(careerObjectives);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Career Objectives', error });
  }
};
