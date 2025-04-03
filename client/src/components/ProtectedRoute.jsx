// src/components/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { checkAuthState } from '../firebase/auth';  // Import the auth check function

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check the authentication state using Firebase
    const unsubscribe = checkAuthState((currentUser) => {
      setUser(currentUser);
      setLoading(false);  // Stop loading once the auth check is complete
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Optional: You can add a spinner or a loading screen
  }

  // If no user is logged in, redirect to the login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If a user is authenticated, allow them to view the protected route
  return children;
};

export default ProtectedRoute;
