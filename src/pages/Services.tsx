import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  {
    title: "Web Development",
    description: "Build modern and responsive websites.",
    icon: "🌐",
    color: "#4facfe",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile app development.",
    icon: "📱",
    color: "#43e97b",
  },
  {
    title: "UI/UX Design",
    description: "Design delightful user interfaces.",
    icon: "🎨",
    color: "#fa709a",
  },
];

const gradientAnimationStyle: React.CSSProperties = {
  minHeight: "100vh",
  padding: "3rem 1rem",
  background: "linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #4facfe)",
  backgroundSize: "400% 400%",
  animation: "gradientMove 15s ease infinite",
};

const textGradientStyle: React.CSSProperties = {
  background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "2rem",
};

const serviceBoxStyle = (color: string): React.CSSProperties => ({
  background: `linear-gradient(135deg, ${color}, #000)`,
  color: "white",
  borderRadius: "1.5rem",
  padding: "2rem",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
});

const Services = () => {
  return (
    <div style={gradientAnimationStyle}>
      <h2 style={textGradientStyle}>Our Services</h2>
      <div className="row justify-content-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div style={serviceBoxStyle(service.color)}>
              <div style={{ fontSize: "2.5rem" }}>{service.icon}</div>
              <h4 style={{ marginTop: "1rem", fontWeight: "bold" }}>
                {service.title}
              </h4>
              <p>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Inject keyframes via inline style tag */}
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

export default Services;
