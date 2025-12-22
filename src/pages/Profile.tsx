import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";

const Profile = () => {
  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(to bottom right, #e0eafc, #cfdef3)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Animate.css */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card shadow-lg border-0 rounded-4 animate__animated animate__fadeInUp">
              <div className="card-body p-4">
                {/* Profile Image + Basic Info */}
                <div className="text-center mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=13"
                    alt="Profile"
                    className="rounded-circle shadow"
                    width="130"
                    height="130"
                  />
                  <h3 className="mt-3 fw-bold">Eswar Dev</h3>
                  <p className="text-muted">Full Stack Developer | UI Architect</p>
                </div>

                {/* Contact Info */}
                <div className="row text-center mb-4">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <FaEnvelope className="text-primary mb-1" />
                    <p className="mb-0">eswar@example.com</p>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <FaPhone className="text-success mb-1" />
                    <p className="mb-0">+91 9876543210</p>
                  </div>
                  <div className="col-md-4">
                    <FaMapMarkerAlt className="text-danger mb-1" />
                    <p className="mb-0">Hyderabad, India</p>
                  </div>
                </div>

                {/* About Me */}
                <h5 className="text-dark mt-4 mb-2">About Me</h5>
                <p className="text-secondary">
                  I'm a passionate developer with a love for building elegant web applications. From front-end
                  animation to full-stack integrations, I thrive on solving complex challenges with clean, maintainable code.
                </p>

                {/* Skills */}
                <h5 className="text-dark mt-4 mb-2">Skills</h5>
                <div className="d-flex gap-3 flex-wrap">
                  <span className="badge bg-primary d-flex align-items-center gap-2">
                    <FaReact /> React
                  </span>
                  <span className="badge bg-success d-flex align-items-center gap-2">
                    <FaNodeJs /> Node.js
                  </span>
                  <span className="badge bg-dark d-flex align-items-center gap-2">
                    <FaGithub /> GitHub
                  </span>
                  <span className="badge bg-info text-dark">TypeScript</span>
                  <span className="badge bg-warning text-dark">Bootstrap</span>
                </div>

                {/* Social Links */}
                <div className="text-center mt-4">
                  <a
                    href="https://github.com/your-profile"
                    className="btn btn-outline-dark btn-sm mx-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="me-1" />
                    GitHub
                  </a>
                  <a href="/contact" className="btn btn-outline-primary btn-sm mx-2">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Profile;
