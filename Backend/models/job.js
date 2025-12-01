const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    position:{type:String, required:true},
    company:{type:String, required:true},
    status:{type:String, enum:["interview","declined","pending"], default:"pending"},
    location:{type:String, default:"my city"},
    joblink: {type:String},
    createdBy:{type:mongoose.Schema.Types.ObjectId, ref:"User", required:true},
},{timestamps:true});

module.exports = mongoose.model("Job", jobSchema);