import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginRequest } from "../utils/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth(); // <-- import login from context

  const handlelogin = async () => {
    try {
      const response = await loginRequest({ email, password });

      const token = response.data.token;  // <-- token from backend
      login(token);                       // <-- store token in context & localStorage

      setEmail("");
      setPassword("");

      navigate("/jobs");                  // <-- redirect to jobs page
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-slate-400 h-screen">
      <div className="flex flex-col justify-center p-6 m-8 rounded-md">
        <input
          type="text"
          placeholder="Enter your email .."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 m-2 rounded-md"
        />

        <input
          type="password"
          placeholder="Enter your password .."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 m-2 rounded-md"
        />

        <button
          onClick={handlelogin}
          className="p-2 m-2 rounded-md bg-green-400 text-white"
        >
          Login
        </button>

        <p>
          New to <b>Jobify</b>? Register yourself
        </p>
      </div>
    </div>
  );
}

export default Login;
