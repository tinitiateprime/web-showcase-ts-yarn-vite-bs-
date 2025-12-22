import React from "react";
import { Shield, Lock, KeyRound, Activity, Info } from "lucide-react";

const Security: React.FC = () => {
  return (
    <div className="container py-5 bg-dark text-light min-vh-100">
      <div className="bg-secondary p-4 rounded shadow border border-light">
        <h2 className="mb-4 d-flex align-items-center gap-2 text-warning fw-bold">
          <Shield size={28} /> Security Center
        </h2>

        {/* Two-Factor Authentication */}
        <div className="card bg-dark border-warning mb-4">
          <div className="card-body">
            <h5 className="card-title d-flex align-items-center gap-2 text-warning">
              <Lock size={18} /> Two-Factor Authentication
            </h5>
            <p className="card-text">
              Add an extra layer of protection to your account.
            </p>
            <button className="btn btn-warning">Enable 2FA</button>
          </div>
        </div>

        {/* Change Password */}
        <div className="card bg-dark border-info mb-4">
          <div className="card-body">
            <h5 className="card-title d-flex align-items-center gap-2 text-info">
              <KeyRound size={18} /> Change Password
            </h5>
            <p className="card-text">
              Regularly update your password for enhanced security.
            </p>
            <button className="btn btn-info">Change Password</button>
          </div>
        </div>

        {/* Activity Logs */}
        <div className="card bg-dark border-success mb-4">
          <div className="card-body">
            <h5 className="card-title d-flex align-items-center gap-2 text-success">
              <Activity size={18} /> Activity Logs
            </h5>
            <p className="card-text">
              Review recent account activity and sign-ins.
            </p>
            <button className="btn btn-success">View Logs</button>
          </div>
        </div>

        {/* Security Tips */}
        <div className="card bg-dark border-primary mb-4">
          <div className="card-body">
            <h5 className="card-title d-flex align-items-center gap-2 text-primary">
              <Info size={18} /> Security Tips
            </h5>
            <ul className="list-group list-group-flush text-light bg-dark">
              <li className="list-group-item bg-dark border-0 p-1">
                • Use a unique, strong password
              </li>
              <li className="list-group-item bg-dark border-0 p-1">
                • Enable Two-Factor Authentication
              </li>
              <li className="list-group-item bg-dark border-0 p-1">
                • Never share your password
              </li>
              <li className="list-group-item bg-dark border-0 p-1">
                • Check logs regularly
              </li>
            </ul>
          </div>
        </div>

        {/* Last Login */}
        <div className="card bg-dark border-danger mb-4">
          <div className="card-body">
            <h5 className="card-title d-flex align-items-center gap-2 text-danger">
              <Activity size={18} /> Last Login
            </h5>
            <p className="card-text">
              Last login: <strong>July 7, 2025, 11:30 AM</strong> from
              IP <strong>192.168.1.55</strong>.
            </p>
            <button className="btn btn-danger">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
