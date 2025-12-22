import React, { useEffect, useState } from "react";
import { Rocket, Star, Zap, RefreshCw } from "lucide-react";
import { useLocation } from "react-router-dom";

const AnimationsPage: React.FC = () => {
  const location = useLocation();

  const [pulse, setPulse] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [counter, setCounter] = useState(0);

  // smooth fade page transitions
  useEffect(() => {
    const body = document.querySelector("body");
    body?.classList.add("animate__animated", "animate__fadeIn");
    return () => {
      body?.classList.remove("animate__fadeIn");
    };
  }, [location.pathname]);

  // animated counter
  useEffect(() => {
    let start = 0;
    const end = 1500;
    const step = Math.ceil(end / 100);

    const interval = setInterval(() => {
      start += step;
      if (start > end) {
        setCounter(end);
        clearInterval(interval);
      } else {
        setCounter(start);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid bg-secondary text-light min-vh-100 py-5 position-relative">
      <div className="container">
        <h1 className="mb-4 text-center d-flex justify-content-center align-items-center gap-2 text-warning fw-bold">
          <Rocket size={28} /> Animation Effects
        </h1>

        {/* Animated Counter */}
        <div className="card bg-primary text-light mb-4 shadow animate__animated animate__fadeInDown">
          <div className="card-body text-center">
            <h2>Users Joined</h2>
            <h3 className="display-4">{counter}</h3>
          </div>
        </div>

        {/* Fade In */}
        <div className="card bg-success text-light mb-4 shadow animate__animated animate__fadeInLeft">
          <div className="card-body text-center">
            <Star size={32} className="mb-3" />
            <h4>Fade In Left</h4>
            <p>This fades in from the left on load.</p>
          </div>
        </div>

        {/* Zoom */}
        <div className="card bg-info text-dark mb-4 shadow animate__animated animate__zoomIn">
          <div className="card-body text-center">
            <Zap size={32} className="mb-3" />
            <h4>Zoom In Animation</h4>
            <p>This block uses a zoom bounce.</p>
          </div>
        </div>

        {/* Pulse on click */}
        <div
          className={`card bg-warning text-dark mb-4 shadow ${pulse ? "animate__animated animate__pulse" : ""}`}
          onClick={() => setPulse(true)}
          onAnimationEnd={() => setPulse(false)}
          style={{ cursor: "pointer" }}
        >
          <div className="card-body text-center">
            <RefreshCw size={32} className="mb-3" />
            <h4>Pulse on Click</h4>
            <p>Click to pulse this card.</p>
          </div>
        </div>

        {/* Floating Button with rotate */}
        <button
          className={`btn btn-danger position-fixed bottom-0 end-0 m-4 rounded-circle shadow-lg fs-4 d-flex align-items-center justify-content-center ${rotate ? "animate__animated animate__rotateIn" : ""}`}
          style={{ width: "60px", height: "60px" }}
          onClick={() => setRotate(true)}
          onAnimationEnd={() => setRotate(false)}
        >
          <Rocket size={24} />
        </button>
      </div>
    </div>
  );
};

export default AnimationsPage;
