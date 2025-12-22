import { List } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="nav flex-column p-3 bg-light shadow h-100">
      <h4 className="mb-4 d-flex align-items-center gap-2">
        <List /> Menu
      </h4>

      <Link to="/" className="nav-link">🏠 Home</Link>
      <Link to="/profile" className="nav-link">👤 Profile</Link>
      <Link to="/login" className="nav-link">🔑 Login</Link>
      <Link to="/signup" className="nav-link">📝 Signup</Link>
      <Link to="/catalog" className="nav-link">📚 Catalog</Link>
      <Link to="/services" className="nav-link">🛠 Services</Link>
      
      {/* grouped sub-links under services */}
      <div className="ps-3">
        <Link to="/search" className="nav-link">🔍 Search</Link>
        <Link to="/comparison" className="nav-link">📊 Comparison</Link>
        <Link to="/comparisontable" className="nav-link">📑 Comparison Table</Link>
        <Link to="/forms" className="nav-link">📝 Forms</Link>
        <Link to="/datatable" className="nav-link">📋 Data Tables</Link>
        <Link to="/infographics" className="nav-link">📈 Infographics</Link>
        <Link to="/audio" className="nav-link">🎵 Audio</Link>
        <Link to="/video" className="nav-link">🎥 Video</Link>
        <Link to="/animation" className="nav-link">🎞️ Animation</Link>
        <Link to="/drag-drop" className="nav-link">🖱️ Drag and Drop</Link>
        <Link to="/editor" className="nav-link">✏️ Online Editor</Link>
        <Link to="/shopping-cart" className="nav-link">🛒 Shopping Cart</Link>
        <Link to="/calendar" className="nav-link">📅 Calendar</Link>
      </div>

      <Link to="/dashboard" className="nav-link mt-3">📊 Dashboard</Link>
      <Link to="/analytics" className="nav-link">📈 Analytics</Link>
      <Link to="/security" className="nav-link">🔒 Security</Link>
      <Link to="/about" className="nav-link">ℹ️ About</Link>
      <Link to="/contact" className="nav-link">📞 Contact</Link>
      <Link to="/help" className="nav-link">❓ Help</Link>
    </nav>
  );
};

export default Sidebar;
