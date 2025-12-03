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
        <div className="flex justify-center items-center bg-slate-200 h-screen">
            <div className="flex flex-col justify-center p-6 m-8 rounded-md bg-white shadow-md w-96">

                <p className="text-2xl font-bold mb-4">Register</p>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 m-2 rounded-md border"
                />

                <input
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 m-2 rounded-md border"
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 m-2 rounded-md border"
                />

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
