import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/register" />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-job"
          element={
            <ProtectedRoute>
              <Createjob />
            </ProtectedRoute>
          }
        />

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
