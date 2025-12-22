import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup: React.FC = () => {
  return (
    <div className="container d-flex justify-content-center align-items-start mt-5">
      <div className="card p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Signup</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control form-control-md" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control form-control-md" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control form-control-md" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn btn-success w-100">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
