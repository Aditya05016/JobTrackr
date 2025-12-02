const express = require("express");
const router = express.Router();
const Job = require("../models/job");
const authMiddleware = require("../middleware/authmiddleware");

// CREATE JOB
router.post("/create-job", authMiddleware, async (req, res) => {
  try {
    const { position, company, status, location, joblink } = req.body;

    const newJob = new Job({
      position,
      company,
      status,
      location,
      joblink,
      createdBy: req.user.userId,  // take from token, not body
    });

    await newJob.save();
    return res.status(201).json({ message: "Job created successfully", newJob });
  } catch (error) {
    console.log("Something went wrong", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// GET ALL JOBS
router.get("/getjob", authMiddleware, async (req, res) => {
  try {
    const getjob = await Job.find({ createdBy: req.user.userId });
    return res.status(200).json({ message: "Successfully fetched jobs", getjob });
  } catch (error) {
    console.error("Something happened", error);
    return res.status(400).json({ message: "Something went wrong", error });
  }
});

router.put("/updatejob/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { position, company, status, location, joblink } = req.body;

    const updatedJob = await Job.findOneAndUpdate(
      { _id: id, createdBy: req.user.userId },   // ensures only owner can update
      { position, company, status, location, joblink },
      { new: true, runValidators: true }         // return updated job + validate schema
    );

    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found or unauthorized" });
    }

    return res.status(200).json({ message: "Job updated successfully", updatedJob });
  } catch (error) {
    console.error("Something happened", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


router.delete("/deletejob/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const deletedJob = await Job.findOneAndDelete({
      _id: id,
      createdBy: req.user.userId,
    });

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found or unauthorized" });
    }

    return res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error while deleting job", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
 