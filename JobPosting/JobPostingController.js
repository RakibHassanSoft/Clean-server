const JobPosting = require('./jobPostingSchema')

// Create a new job posting
exports.createJobPosting = async (req, res) => {
    const {
      userId,
      jobTitle,
      company,
      location,
      employmentType,
      salaryRange,
      remoteOption,
      experience,
      jobDescription,
      responsibilities,
      requirements,
      skills,
      applySection,
      templateId,
    } = req.body;

    console.log('Request Body:', req.body); // Log the request body

    try {
      const newJobPosting = new JobPosting({
        userId,
        jobTitle,
        company,
        location,
        employmentType,
        salaryRange,
        remoteOption,
        experience,
        jobDescription,
        responsibilities,
        requirements,
        skills,
        applySection,
        templateId
      });

      const savedJobPosting = await newJobPosting.save();
      console.log('Saved Job Posting:', savedJobPosting); // Log the saved posting
      res.status(201).json(savedJobPosting);
    } catch (err) {
      console.error(err); // Log the full error
      res.status(500).json({ error: 'Failed to create job posting', message: err.message, stack: err.stack });
    }
};

  
  
// Get all job postings
exports.getAllJobPostings = async (req, res) => {
  try {
    const jobPostings = await JobPosting.find();
    res.status(200).json(jobPostings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch job postings', message: err.message });
  }
};

// Get job postings by userId
exports.getJobPostingsByUserId = async (req, res) => {
  const { id } = req.params;

  try {
    const userJobPostings = await JobPosting.find({ userId:id });
    if (userJobPostings.length === 0) {
      return res.status(404).json({ message: 'No job postings found for this user' });
    }
    res.status(200).json(userJobPostings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch job postings', message: err.message });
  }
};

// Update job posting by userId and _id
exports.updateJobPostingByUserId = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const jobPosting = await JobPosting.findOneAndUpdate(
      { userId: id }, // Match both userId and job _id
      { $set: updateData },
      { new: true }
    );

    if (!jobPosting) {
      return res.status(404).json({ message: 'Job posting not found or unauthorized' });
    }

    res.status(200).json(jobPosting);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update job posting', message: err.message });
  }
};

// Delete job posting by _id
exports.deleteJobPostingById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedJobPosting = await JobPosting.findByIdAndDelete(id);

    if (!deletedJobPosting) {
      return res.status(404).json({ message: 'Job posting not found' });
    }

    res.status(200).json({ message: 'Job posting deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete job posting', message: err.message });
  }
};
