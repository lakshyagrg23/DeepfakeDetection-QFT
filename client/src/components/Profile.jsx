import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig'; // Firebase Auth instance
import { updatePassword } from 'firebase/auth'; // For password reset

const Profile = () => {
  const [email, setEmail] = useState(auth.currentUser?.email || '');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdateProfile = async () => {
    try {
      await auth.currentUser.updateEmail(email); // Update email
      setMessage('Profile updated successfully!');
    } catch (error) {
      setMessage(`Error updating profile: ${error.message}`);
    }
  };

  const handlePasswordReset = async () => {
    try {
      await updatePassword(auth.currentUser, password);
      setMessage('Password updated successfully!');
    } catch (error) {
      setMessage(`Error updating password: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold mb-6">Update Profile</h2>

      <div className="w-full max-w-md">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 border rounded mt-1 mb-4"
        />

        <button
          onClick={handleUpdateProfile}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </div>

      <div className="w-full max-w-md mt-6">
        <label className="block text-gray-700">New Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full px-4 py-2 border rounded mt-1 mb-4"
        />

        <button
          onClick={handlePasswordReset}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Reset Password
        </button>
      </div>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default Profile;
