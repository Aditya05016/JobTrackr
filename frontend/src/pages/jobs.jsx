import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getJobRequest } from "../utils/axios";
import Jobcard from "../components/Jobcard";

function Job() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // ⭐ Add this

  const fetchAllJobs = async () => {
    try {
      setLoading(true);
      const response = await getJobRequest();
      setJobs(response.data.getjob);
    } catch (error) {
      console.log("Something went wrong", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Jobs</h1>

      {loading && <p>Loading jobs...</p>}
      {error && <p className="text-red-500">Failed to fetch jobs</p>}

      <div className="flex flex-col gap-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Jobcard 
              key={job._id}
              position={job.position}
              company={job.company}
              status={job.status}
              location={job.location}
              joblink={job.joblink}
            />
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>

      {/* ⭐ Add Job Navigation */}
      <button
        className="mt-4 bg-blue-500 p-2 text-white rounded-md"
        onClick={() => navigate("/create-job")}
      >
        Add Job
      </button>
    </div>
  );
}

export default Job;
