import { React } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig'; // Firebase auth for sign-out

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/'); // Redirect to home after sign out
    } catch (error) {
      console.error('Sign out error', error);
    }
  };


  return (
    <div className="dashboard-container flex h-screen">
      {/* Left Navigation Panel */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="text-center py-4 text-2xl font-bold border-b border-gray-700">
          Dashboard
        </div>
        <nav className="mt-8 flex-1">
          <ul>
            <li>
              <NavLink
                to="/dashboard/upload"
                className="block px-4 py-2 hover:bg-gray-700"
                activeClassName="bg-gray-700"
              >
                Upload
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/history"
                className="block px-4 py-2 hover:bg-gray-700"
                activeClassName="bg-gray-700"
              >
                History
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/profile"
                className="block px-4 py-2 hover:bg-gray-700"
                activeClassName="bg-gray-700"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Sign Out Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>

        {/* Render Selected Component */}
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
