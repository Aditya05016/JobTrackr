import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const loginRequest = (data) => {
  return axios.post(`${BASE_URL}/api/auth/login`, data);
};

export const RegisterRequest = (data) =>{
  return axios.post(`${BASE_URL}/api/auth/register`, data);
}
