// src/pages/About.tsx
import { FaLightbulb, FaCode, FaUsers, FaCheckCircle, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const cardStyle: React.CSSProperties = {
    minHeight: "100vh",
    background: "linear-gradient(to right, #fdfbfb, #ebedee)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  };

  const iconStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    marginRight: "10px",
  };

  return (
    <div style={cardStyle}>
      <div className="row g-4 w-100 justify-content-center">
        {/* Vision */}
        <div className="col-md-5 col-lg-4">
          <div className="card h-100 shadow border-0 animate__animated animate__fadeInUp">
            <div className="card-body">
              <h5 className="card-title text-primary d-flex align-items-center">
                <FaLightbulb style={iconStyle} />
                Vision
              </h5>
              <p className="card-text text-secondary">
                Deliver engaging, scalable, and user-centric digital experiences that make an impact.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="col-md-5 col-lg-4">
          <div className="card h-100 shadow border-0 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="card-body">
              <h5 className="card-title text-info d-flex align-items-center">
                <FaCode style={iconStyle} />
                Expertise
              </h5>
              <p className="card-text text-secondary">
                Skilled in React, TypeScript, Node.js, and building modern, clean UI interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Collaboration */}
        <div className="col-md-5 col-lg-4">
          <div className="card h-100 shadow border-0 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="card-body">
              <h5 className="card-title text-danger d-flex align-items-center">
                <FaUsers style={iconStyle} />
                Collaboration
              </h5>
              <p className="card-text text-secondary">
                I enjoy collaborating with teams to bring ideas to life with empathy and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Goal */}
        <div className="col-md-5 col-lg-4">
          <div className="card h-100 shadow border-0 animate__animated animate__fadeInUp animate__delay-3s">
            <div className="card-body">
              <h5 className="card-title text-success d-flex align-items-center">
                <FaCheckCircle style={iconStyle} />
                Goal
              </h5>
              <p className="card-text text-secondary">
                To keep learning, contribute to open-source, and deliver meaningful software.
              </p>

              <Link
                to="/contact"
                className="btn btn-outline-dark btn-sm mt-3 d-inline-flex align-items-center"
              >
                <FaEnvelope className="me-2" />
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Add Animate.css */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </div>
  );
};

export default About;
