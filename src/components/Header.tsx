import React from "react";
import { SiTypescript, SiYarn, SiVite, SiBootstrap } from "react-icons/si";

const Header: React.FC = () => {
  const headerStyle = {
    background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 4s ease infinite',
    color: '#ffffff',
    overflow: 'hidden',
    position: 'relative' as const
  };

  const overlayStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
    animation: 'floatingBubbles 6s ease-in-out infinite',
    zIndex: 0
  };

  const logoStyle = {
    fontWeight: 'bold' as const,
    fontSize: '2.5rem',
    background: 'linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4, #45b7d1)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'rainbowText 3s ease-in-out infinite, textGlow 2s ease-in-out infinite alternate',
    textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
    zIndex: 2,
    textAlign: 'center' as const,
    marginBottom: '10px'
  };

  const techLabelStyle = {
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    margin: '0 10px',
    zIndex: 2
  };

  const buttonContainerStyle = {
    position: 'absolute' as const,
    top: '10px',
    right: '20px',
    zIndex: 2
  };

  const loginButtonStyle = {
    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    backgroundSize: '200% 200%',
    animation: 'buttonColorShift 4s ease infinite',
    color: '#ffffff',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '25px',
    textDecoration: 'none',
    padding: '6px 16px',
    fontWeight: '600' as const,
    marginRight: '8px',
    transition: 'all 0.3s ease',
  };

  const signupButtonStyle = {
    background: 'linear-gradient(45deg, #ffd700, #ffed4e, #ff6b6b)',
    backgroundSize: '200% 200%',
    animation: 'buttonColorShift2 3s ease infinite',
    color: '#1a365d',
    border: 'none',
    borderRadius: '25px',
    fontWeight: 'bold' as const,
    textDecoration: 'none',
    padding: '6px 16px',
    transition: 'all 0.3s ease',
  };

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes rainbowText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes textGlow {
          0% { filter: brightness(1) drop-shadow(0 0 5px rgba(255, 215, 0, 0.3)); }
          100% { filter: brightness(1.2) drop-shadow(0 0 20px rgba(255, 215, 0, 0.6)); }
        }
        @keyframes floatingBubbles {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 1; }
        }
        @keyframes buttonColorShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes buttonColorShift2 {
          0% { background-position: 0% 50%; }
          33% { background-position: 50% 100%; }
          66% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <header
        className="text-center py-4 position-relative"
        style={headerStyle}
      >
        <div style={overlayStyle} />

        <div style={buttonContainerStyle}>
          <a href="/login" style={loginButtonStyle}>Login</a>
          <a href="/signup" style={signupButtonStyle}>Signup</a>
        </div>

        <h1 style={logoStyle}>TS-Yarn-Vite-BS</h1>

        <div className="d-flex justify-content-center flex-wrap mt-2" style={{ zIndex: 2, position: 'relative' }}>
          <div style={techLabelStyle}><SiTypescript size={22} /> TypeScript</div>
          <div style={techLabelStyle}><SiYarn size={22} /> Yarn</div>
          <div style={techLabelStyle}><SiVite size={22} /> Vite</div>
          <div style={techLabelStyle}><SiBootstrap size={22} /> Bootstrap</div>
        </div>
      </header>
    </>
  );
};

export default Header;
