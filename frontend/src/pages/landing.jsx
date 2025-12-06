import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white to-blue-200 flex justify-center items-center">
      
      <div className="max-w-xl text-center px-6">
        
        <h1 className="text-4xl font-bold mb-4">
          Track Your Job Search with Clarity & Confidence
        </h1>

        <p className="text-gray-700 text-lg mb-6">
          Organize your applications, monitor your progress, and stay ahead in your job journey.
        </p>

        <button 
          onClick={() => navigate('/login')}
          className="bg-yellow-500 text-white shadow-md rounded-md px-6 py-3"
        >
          Get Started
        </button>

      </div>

    </div>
  );
}

export default Landing;
