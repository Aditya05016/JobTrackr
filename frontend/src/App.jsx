import React from "react";
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/login";
import Register from "./pages/Register";
import Jobs from "./pages/jobs";
import Createjob from "./pages/createJob";
import Updatejob from "./pages/updateJob";

function App() {
  return (
    <AuthProvider>
      <h1>This is a Job App</h1>

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs-test" element={<Jobs />} />
        <Route path="/add-job" element={<Createjob/>} />

        {/* Protected Routes */}
        {/* <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          }
        /> */}

        {/* <Route
          path="/create-job"
          element={
            <ProtectedRoute>
              <Createjob />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/update-job/:id"
          element={
            <ProtectedRoute>
              <Updatejob />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
