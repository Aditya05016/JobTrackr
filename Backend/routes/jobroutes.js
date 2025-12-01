const express = require("express");
const router = express.Router();
const Job = require("../models/job");


//create a job 

router.post("/create-job", async(req,res) => {
    try{
        const {position, company,status, location , joblink, createdBy} = req.body;

        const newJob = new Job({
            position,
            company,
            status,
            location,
            joblink,
            createdBy
        })
        await newJob.save();
        return res.status(201).json({message:"Job created sucessfully", newJob});
    }catch(error){
        console.log("Somethig went wrong", error);
        return res.status(500).json({message:"Interbnal server error"});
    }
})


module.exports = router;