import React from "react";
import { Send, User, Mail, Lock, Upload, CheckCircle } from "lucide-react";

const RichFormPage: React.FC = () => {
  return (
    <div className="container-fluid bg-dark text-light min-vh-100 py-5">
      <div className="container bg-secondary shadow rounded p-4">
        <h2 className="mb-4 text-center text-warning fw-bold d-flex justify-content-center align-items-center gap-2">
          <CheckCircle size={28} /> Advanced Registration Form
        </h2>

        <form>
          {/* Name */}
          <div className="form-floating mb-3 text-dark">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Full Name"
            />
            <label htmlFor="name">
              <User className="me-1" size={16} /> Full Name
            </label>
          </div>

          {/* Email */}
          <div className="form-floating mb-3 text-dark">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
            />
            <label htmlFor="email">
              <Mail className="me-1" size={16} /> Email
            </label>
          </div>

          {/* Password */}
          <div className="form-floating mb-3 text-dark">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <label htmlFor="password">
              <Lock className="me-1" size={16} /> Password
            </label>
          </div>

          {/* File Upload */}
          <div className="mb-3">
            <label htmlFor="fileUpload" className="form-label fw-semibold text-light">
              <Upload className="me-1" size={16} /> Upload Resume
            </label>
            <input className="form-control" type="file" id="fileUpload" />
          </div>

          {/* Gender Radio */}
          <div className="mb-3">
            <label className="fw-semibold d-block mb-2 text-light">Gender</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderMale"
                value="male"
              />
              <label className="form-check-label text-light" htmlFor="genderMale">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderFemale"
                value="female"
              />
              <label className="form-check-label text-light" htmlFor="genderFemale">
                Female
              </label>
            </div>
          </div>

          {/* Interests Checkbox */}
          <div className="mb-3">
            <label className="fw-semibold d-block mb-2 text-light">Interests</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="interest1" />
              <label className="form-check-label text-light" htmlFor="interest1">
                Frontend
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="interest2" />
              <label className="form-check-label text-light" htmlFor="interest2">
                Backend
              </label>
            </div>
          </div>

          {/* Select Dropdown */}
          <div className="mb-3">
            <label htmlFor="country" className="fw-semibold mb-1 text-light">
              Country
            </label>
            <select className="form-select" id="country">
              <option>Choose...</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button className="btn btn-warning btn-lg d-flex align-items-center gap-2 justify-content-center">
              <Send size={16} /> Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RichFormPage;
