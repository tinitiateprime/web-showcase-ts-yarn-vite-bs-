import React from 'react';
import { Link } from 'react-router-dom';

const SidebarRight: React.FC = () => {
  return (
    <div className="d-flex flex-column align-items-end p-3"> {/* Removed background styling */}
      <h5 className="mb-3">Quick Links</h5>
      <Link to="/profile" className="text-primary mb-2">Profile</Link>
      <Link to="/settings" className="text-primary mb-2">Settings</Link>
      <Link to="/logout" className="text-danger mb-2">Logout</Link>
    </div>
  );
};

export default SidebarRight;
