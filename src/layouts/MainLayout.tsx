import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/SidebarLeft';

const MainLayout: React.FC = () => {
  return (
    <div className="container-fluid">
      {/* Header */}
      <Header />

      {/* Main Content Layout */}
      <div className="row">
        {/* Sidebar (Left) */}
        <div className="col-md-3 bg-light p-3">
          <Sidebar />
        </div>

        {/* Main Content (Center) */}
        <div className="col-md-9 p-3">
          <Outlet /> {/* Loads Page Content Dynamically */}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
