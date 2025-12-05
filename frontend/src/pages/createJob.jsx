import { useState } from "react";
import { handleJob } from "../utils/axios";

function Createjob() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");

  const [data, setData] = useState([]);

  const addJob = async () => {
    try {
      const response = await handleJob({
        jobTitle,
        company,
        position,
        status,
        location,
      });

      setData(response.data);

      // reset form
      setJobTitle("");
      setCompany("");
      setPosition("");
      setStatus("");
      setLocation("");

    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-slate-200 h-screen">
      <div className="flex flex-col bg-white p-6 rounded-xl shadow-lg w-full max-w-md gap-4 border border-gray-200">

        <h2 className="text-2xl font-bold text-center">Add Your Job Details</h2>
        <p className="text-center text-sm text-gray-600">
          Track your job applications in a simple way
        </p>

        {/* Job Title */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Job Title</label>
          <input
            type="text"
            placeholder="Enter job title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="p-2 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Company */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Company</label>
          <input
            type="text"
            placeholder="Enter company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="p-2 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Position */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Position</label>
          <input
            type="text"
            placeholder="Enter position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="p-2 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Status */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Status</label>
          <input
            type="text"
            placeholder="pending / interview / declined"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-2 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Location</label>
          <input
            type="text"
            placeholder="Enter job location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <button 
          onClick={addJob}
          className="bg-blue-500 text-white p-2 rounded-lg w-full font-semibold hover:bg-blue-600 transition-all hover:scale-105"
        >
          Add Job
        </button>
      </div>
    </div>
  );
}

export default Createjob;
