import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Import routes and route
import Home from './pages/Home';                  // Homepage
import Login from './components/Login';           // Login component
import Signup from './components/Signup';         // Signup component
import Dashboard from './pages/Dashboard';        // Dashboard after login
import Upload from './components/Upload';         // Upload component for media
import Result from './components/Result';         // Result page to display detection result
import Profile from './components/Profile';       // Profile page for updating info
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes for the dashboard and its components */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Nested routes within the dashboard */}
          <Route path="upload" element={<Upload />} />
          <Route path="result" element={<Result />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
