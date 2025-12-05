import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const loginRequest = (data) => {
  return axios.post(`${BASE_URL}/api/auth/login`, data);
};

export const RegisterRequest = (data) =>{
  return axios.post(`${BASE_URL}/api/auth/register`, data);
}

export const handleJob = (jobData) => {

  const token = localStorage.getItem("token");  // 🔥 your login token

  return axios.post(
    `${BASE_URL}/api/jobs/create-job`,
    jobData,
    {
      headers: {
        Authorization: `Bearer ${token}`,   // 🔥 important line
      },
    }
  );
};


export const getJobRequest = () => {
  const token = localStorage.getItem("token");

  return axios.get(`${BASE_URL}/api/jobs/getjob`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
