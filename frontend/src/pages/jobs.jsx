import {useState} from "react";
import Jobcard from "../components/Jobcard";


function Job () {
    const[error,setError] = useState(null);
    const[loading,setloading] = useState(false);
    return (
        <div>
            <h1 className="text-2xl font-bold">Your Jobs</h1>
            <Jobcard
             company="Google"
              position="Frontend Developer"
             status="Applied"
            location="Bangalore"
            date="2025-12-03"
               />




            <button>Add Job</button>
        </div>

    )
}

export default Job;