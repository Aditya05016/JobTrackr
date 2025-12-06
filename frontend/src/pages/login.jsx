import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginRequest } from "../utils/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handlelogin = async () => {
    try {
      const response = await loginRequest({ email, password });
      const token = response.data.token;

      login(token);

      setEmail("");
      setPassword("");

      navigate("/jobs");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white to-blue-200 flex justify-center items-center">
      
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">

        <h2 className="text-3xl font-bold mb-6">
          Login to Your Account
        </h2>

        <div className="text-left mb-4">
          <label className="font-semibold">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-1 rounded-md border"
          />
        </div>

        <div className="text-left mb-6">
          <label className="font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mt-1 rounded-md border"
          />
        </div>

        <button
          onClick={handlelogin}
          className="bg-blue-600 text-white w-full py-3 rounded-md font-semibold"
        >
          Login
        </button>

        <p className="mt-4">
          New to <b>Jobify</b>?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-600 underline"
          >
            Register
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;
