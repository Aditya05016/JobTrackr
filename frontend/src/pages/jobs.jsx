import { useState, useEffect } from "react";
import { getJobRequest } from "../utils/axios";
import Jobcard from "../components/Jobcard";

function Job() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAllJobs = async () => {
    try {
      setLoading(true);
      const response = await getJobRequest();
      setJobs(response.data);
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

      {/* Loading */}
      {loading && <p>Loading jobs...</p>}

      {/* Error */}
      {error && <p className="text-red-500">Failed to fetch jobs</p>}

      {/* Jobs List */}
      <div className="flex flex-col gap-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Jobcard 
              key={job._id}
              job={job.job}
              company={job.company}
              position={job.position}
              status={job.status}
              location={job.location}
            />
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>

      <button className="mt-4 bg-blue-500 p-2 text-white rounded-md">
        Add Job
      </button>
    </div>
  );
}

export default Job;
