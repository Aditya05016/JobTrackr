import { useState } from "react";
import { RegisterRequest } from "../utils/axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            setLoading(true);
            setError(null); // clear previous errors

            // ❗ Input validations
            if (name.trim() === "") {
                setError("Name cannot be empty");
                setLoading(false);
                return;
            }

            if (email.trim() === "") {
                setError("Email cannot be empty");
                setLoading(false);
                return;
            }

            if (password.length < 6) {
                setError("Password must be at least 6 characters");
                setLoading(false);
                return;
            }

            // 🔥 API request
            await RegisterRequest({ name, email, password });

            // 🔥 Redirect after success
            navigate("/login");

            // reset fields
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false);
        } catch (error) {
            console.error("Something went wrong", error);
            setError("Something went wrong. Try again.");
            setLoading(false);
        }
    };

    return (
     <div className="min-h-screen bg-gradient-to-tr from-white to-blue-200 flex justify-center items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">

                <h2 className="text-3xl font-bold mb-6 ">Register Yourself</h2>
                

                <div className=" text-left mb-4">
                    <label className="font-semibold">Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 mt-1 border rounded-md "
                />
                </div>
                <div className=" text-left mb-4">
                    <label className="font-semibold">Email</label>
                <input
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" w-full p-3 mt-1  border rounded-md"
                />
                </div>
                 

                 <div className=" text-left mb-4">
                    <label className="font-semibold">Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=" w-full p-3 mt-1 border rounded-md "
                />
                </div>

                <button
                    onClick={handleRegister}
                    disabled={loading}
                    className="p-2 m-2 rounded-md bg-blue-500 text-white disabled:bg-blue-300"
                >
                    {loading ? "Registering..." : "Register"}
                </button>

                {/* ❗ Error message */}
                {error && (
                    <p className="text-red-500 p-2 m-2 text-center">{error}</p>
                )}
            </div>
        </div>
    );
}

export default Register;
