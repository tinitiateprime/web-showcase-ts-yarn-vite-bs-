import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+91 98765 43210",
    color: "#4facfe",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "contact@company.com",
    color: "#43e97b",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Address",
    value: "Hyderabad, Telangana, India",
    color: "#fa709a",
  },
];

const gradientAnimationStyle: React.CSSProperties = {
  minHeight: "100vh",
  padding: "3rem 1rem",
  background: "linear-gradient(-45deg, #fc5c7d, #6a82fb, #45aaf2, #f093fb)",
  backgroundSize: "400% 400%",
  animation: "gradientMove 15s ease infinite",
};

const headingStyle: React.CSSProperties = {
  background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "2rem",
};

const infoCardStyle = (color: string): React.CSSProperties => ({
  background: `linear-gradient(135deg, ${color}, #000)`,
  color: "#fff",
  padding: "1.5rem",
  borderRadius: "1.5rem",
  textAlign: "center",
  boxShadow: "0 0 15px rgba(0,0,0,0.2)",
});

const formStyle: React.CSSProperties = {
  background: "#fff",
  padding: "2rem",
  borderRadius: "1rem",
  boxShadow: "0 0 15px rgba(0,0,0,0.2)",
};

const Contact = () => {
  return (
    <div style={gradientAnimationStyle}>
      <h2 style={headingStyle}>Contact Us</h2>

      <div className="row justify-content-center mb-5">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            className="col-md-3 col-10 mb-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div style={infoCardStyle(info.color)}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{info.icon}</div>
              <h5>{info.label}</h5>
              <p>{info.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="row justify-content-center">
        <motion.div
          className="col-md-6 col-11"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form style={formStyle}>
            <div className="mb-3">
              <label className="form-label fw-bold">Name</label>
              <input type="text" className="form-control" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input type="email" className="form-control" placeholder="Your email" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Message</label>
              <textarea className="form-control" rows={4} placeholder="Your message"></textarea>
            </div>
            <button className="btn btn-primary w-100">Send Message</button>
          </form>
        </motion.div>
      </div>

      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
