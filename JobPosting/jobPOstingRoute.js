const express = require('express');
const jobController = require('./JobPostingController');
const router = express.Router();

// POST /jobs
router.post('/jobs', jobController.createJobPosting);

// GET /jobs
router.get('/jobs', jobController.getAllJobPostings);

// GET /jobs/user/:userId
router.get('/jobs/:id', jobController.getJobPostingsByUserId);

// PUT /jobs/:id/user/:userId
router.put('/jobs/:id', jobController.updateJobPostingByUserId);

// DELETE /jobs/:id
router.delete('/jobs/:id', jobController.deleteJobPostingById);

module.exports = router;
