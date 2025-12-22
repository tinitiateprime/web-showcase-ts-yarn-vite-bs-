import React from "react";

const HomePage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
    fontFamily: "Poppins, sans-serif",
    color: "#fff",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.8))",
    zIndex: 1,
  };

  const heroStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "80px 20px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "20px",
    marginBottom: "50px",
  };

  const heroTitleStyle: React.CSSProperties = {
    fontSize: "2.8rem",
    fontWeight: "700",
    color: "#fff",
    textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
  };

  const heroSubtitleStyle: React.CSSProperties = {
    fontSize: "1.3rem",
    fontWeight: "400",
    color: "#ddd",
    marginTop: "15px",
  };

  const sectionStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 2,
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "12px",
    width: "80%",
    backdropFilter: "blur(6px)",
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#ffcc00",
    marginBottom: "15px",
  };

  const paragraphStyle: React.CSSProperties = {
    color: "#f0f0f0",
    fontSize: "1rem",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      {/* Overlay */}
      <div style={overlayStyle} />

      {/* Scrollable middle content */}
      <div
        style={{
          height: "100vh",
          overflowY: "auto",
          padding: "20px 10px",
          position: "relative",
          zIndex: 3,
          scrollBehavior: "smooth",
        }}
      >
        {/* Hero Section */}
        <section style={heroStyle}>
          <h1 style={heroTitleStyle}>🏠 Tinitate IT Solution Hub</h1>
          <p style={heroSubtitleStyle}>
            From A to Z — Everything you need for your Education
          </p>
        </section>

        {/* What We Do */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>💡 What We Do</h2>
          <p style={paragraphStyle}>
            We provide learning and development resources for students and
            professionals to master new technologies, gain hands-on experience,
            and build real-world projects.
          </p>
        </section>

        {/* Comparison */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📊 Comparison</h2>
          <p style={paragraphStyle}>
            Compare your skills and growth against industry benchmarks and
            discover personalized recommendations for improvement.
          </p>
        </section>

        {/* Quick Links */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🔗 Quick Links</h2>
          <p style={paragraphStyle}>
            Access tutorials, documentation, community forums, and interview
            resources directly from one place.
          </p>
        </section>

        {/* Contact Form */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>📞 Contact Us</h2>
          <p style={paragraphStyle}>
            Have a question or need support? Reach us at{" "}
            <strong>support@tinitate.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
