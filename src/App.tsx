
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Actions from "./pages/Actions";
import Logout from "./pages/Logout";
import Catalog from "./pages/Catalog";
import Comparison from "./pages/Comparison";


import Search from "./pages/Search";
import ComparisonTable from "./pages/ComparisonTable";
import Forms from "./pages/Forms";
import DataTable from "./pages/DataTable";
import Infographics from "./pages/Infographics";
import Audio from "./pages/Audio";
import Video from "./pages/Video";
import Animation from "./pages/Animation";
import DragDrop from "./pages/DragDrop";
import Editor from "./pages/Editor";
import ShoppingCart from "./pages/ShoppingCart";
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Security from "./pages/Security";
import Help from "./pages/Help";



const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <SidebarLeft />
        <div className="container-fluid px-4 py-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/actions" element={<Actions />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/comparison" element={<Comparison />} />

            <Route path="/search" element={<Search />} />
            <Route path="/comparisontable" element={<ComparisonTable />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/datatable" element={<DataTable />} />
            <Route path="/infographics" element={<Infographics />} />
            <Route path="/audio" element={<Audio />} />
            <Route path="/video" element={<Video />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/drag-drop" element={<DragDrop />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/security" element={<Security />} />
            <Route path="/help" element={<Help />} />

          </Routes>
        </div>
        <SidebarRight />
      </div>
      <Footer />
    </div>
  );
};

export default App;