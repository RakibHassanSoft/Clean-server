const Projects = require("./projectSchema");

// Create a new project
exports.createProject = async (req, res) => {
  try {
      const { userId, templateId, projects } = req.body; // Expecting projects as an array of objects

      console.log(userId, templateId, projects); // For debugging

      // Check if a project already exists for the given userId and templateId
      let existingProject = await Projects.findOne({ userId, templateId });

      if (existingProject) {
          // If a project already exists, add the new projects to the existing ones
          existingProject.projects.push(...projects); // Spread the new projects into the existing ones
          await existingProject.save(); // Save the updated project

          return res.status(200).json({
              message: 'Existing projects updated successfully',
              project: existingProject
          });
      } else {
          // If no project exists, create a new one
          const newProject = new Projects({
              userId,
              templateId,
              projects: projects // Directly assign the array of projects
          });

          await newProject.save();
          return res.status(201).json({
              message: 'New project created successfully',
              project: newProject
          });
      }
  } catch (error) {
      console.error('Error creating or updating project:', error); // Improved error logging
      res.status(500).json({ message: 'Error creating or updating project', error });
  }
};



// Get all projects for a specific user and template
exports.getAllProjects = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from the route parameters
    const projects = await Projects.find({ userId: id, templateId: templateId }).populate('userId', 'name email');

    if (!projects || projects.length === 0) {
      return res.status(404).json({ message: 'No projects found for this user and template' });
    }

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
};

// Get a specific project by userId and templateId
exports.getProjectById = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get both userId and templateId from the route parameters
    const project = await Projects.findOne({ userId: id, templateId: templateId });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project', error: error.message });
  }
};

// Update a project by userId and templateId
exports.updateProject = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get both userId and templateId from the route parameters
    const updatedProject = await Projects.findOneAndUpdate(
      { userId: id, templateId: templateId }, // Find by userId and templateId
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error: error.message });
  }
};

// Delete a project by userId and templateId
exports.deleteProject = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get both userId and templateId from the route parameters
    const deletedProject = await Projects.findOneAndDelete({ userId: id, templateId: templateId });

    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project', error });
  }
};

