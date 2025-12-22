import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar: React.FC = () => {
  return (
    <nav>
      <ul className="list-inline">
        <li className="list-inline-item"><Link to="/" className="btn btn-light">Home</Link></li>
        <li className="list-inline-item"><Link to="/about" className="btn btn-light">About</Link></li>
        <li className="list-inline-item"><Link to="/services" className="btn btn-light">Services</Link></li>
        <li className="list-inline-item"><Link to="/contact" className="btn btn-light">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default MenuBar;
