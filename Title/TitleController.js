const Title = require("./TitleSchema");

// Create a new title entry
exports.createTitle = async (req, res) => {
  try {
    const { userId, templateId, title } = req.body;

    // Check if a title with the same userId and templateId already exists
    const existingTitle = await Title.findOne({ userId, templateId });

    if (existingTitle) {
      return res.status(400).json({ message: 'Title already exists for this user and template' });
    }

    // If no existing title, create a new one
    const newTitle = new Title({ userId, templateId, title });
    await newTitle.save();

    res.status(201).json({ message: 'Title created successfully', title: newTitle });
  } catch (error) {
    res.status(500).json({ message: 'Error creating title', error });
  }
};

// Get all title entries
exports.getAllTitles = async (req, res) => {
  try {
    const titles = await Title.find();
    res.status(200).json(titles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching titles', error });
  }
};

// Get a specific title entry by ID
exports.getTitleById = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get title ID and templateId from params

    // Find the title by its ID and templateId
    const title = await Title.findOne({ userId: id, templateId });

    if (!title) {
      return res.status(404).json({ message: 'Title not found' });
    }

    res.status(200).json(title);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching title', error });
  }
};


// Update a title entry by ID
exports.updateTitle = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get title ID, userId, and templateId from parameters

    // Find and update the title by ID, userId, and templateId
    const updatedTitle = await Title.findOneAndUpdate(
      { userId: id, templateId }, // Query to find the title
      req.body, // Data to update
      { new: true, runValidators: true } // Options
    );

    if (!updatedTitle) {
      return res.status(404).json({ message: 'Title not found or user/template ID mismatch' });
    }

    res.status(200).json({ message: 'Title updated successfully', title: updatedTitle });
  } catch (error) {
    res.status(500).json({ message: 'Error updating title', error });
  }
};


// Delete a title entry by ID
exports.deleteTitle = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTitle = await Title.findByIdAndDelete(id);
    if (!deletedTitle) {
      return res.status(404).json({ message: 'Title not found' });
    }
    res.status(200).json({ message: 'Title deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting title', error });
  }
};
