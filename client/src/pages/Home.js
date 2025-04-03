import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';  // Import Firebase auth

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login status
  const navigate = useNavigate();

  // Check user authentication status
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);  // Set user as logged in
      } else {
        setIsLoggedIn(false); // User is not logged in
      }
    });

    return () => unsubscribe();  // Cleanup subscription on unmount
  }, []);

  // Handle the Get Started button click
  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate('/dashboard/upload');  // Redirect to dashboard if logged in
    } else {
      navigate('/login');  // Redirect to login if not logged in
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-[60vh] flex items-center justify-center">
        <div className="text-center text-blue px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-4">
            Detect Deepfake Media Instantly
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8">
            Use our AI-powered platform to detect deepfake images and videos with accuracy and speed.
          </p>
          <div className="space-x-4">
            <button
              onClick={handleGetStarted}  // Conditionally redirect based on login status
              className="bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-800 transition duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                className="w-16 h-16 mx-auto mb-4"
                src="https://img.icons8.com/?size=100&id=61864&format=png&color=000000"
                alt="AI Detection"
              />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Detection</h3>
              <p className="text-gray-700">
                Our advanced AI algorithms analyze media files to accurately detect deepfakes in real-time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                className="w-16 h-16 mx-auto mb-4"
                src="https://img.icons8.com/?size=100&id=bDrb5MdYaEje&format=png&color=000000"
                alt="Real-Time Results"
              />
              <h3 className="text-xl font-semibold mb-2">Real-Time Results</h3>
              <p className="text-gray-700">
                Get instant feedback on your uploads with our fast and reliable deepfake detection engine.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                className="w-16 h-16 mx-auto mb-4"
                src="https://img.icons8.com/?size=100&id=2985&format=png&color=000000"
                alt="Secure Platform"
              />
              <h3 className="text-xl font-semibold mb-2">Secure and Private</h3>
              <p className="text-gray-700">
                We ensure the privacy of your uploads and provide a secure platform for media analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-gray-400">
            <div>
              <h3 className="text-lg font-semibold text-white">Deepfake Detector</h3>
              <p>&copy; 2024 Deepfake Detector. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/about" className="hover:text-white">About</a>
              <a href="/contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
