import React, { useState } from "react";
import { BarChart2, Users, TrendingUp, DollarSign, Bell, CheckCircle, Info } from "lucide-react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const AdvancedDashboard: React.FC = () => {
  // notifications
  const [notifications] = useState([
    "New user registered",
    "Payment received",
    "Backup completed",
    "Server restarted",
    "User password changed",
  ]);

  // chart data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 15000, 10000, 18000, 22000, 26000],
        fill: true,
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
      },
    ],
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container-fluid" style={{ background: "linear-gradient(135deg, #0d47a1, #1b5e20)", minHeight: "100vh", color: "white" }}>
      <div className="container py-5">
        {/* Header */}
        <h1 className="mb-4 d-flex align-items-center gap-2 text-warning fw-bold">
          <BarChart2 size={28} /> Advanced Dashboard
        </h1>

        {/* Metrics Row */}
        <div className="row g-4 mb-5">
          <div className="col-md-3">
            <div className="card bg-dark text-light shadow">
              <div className="card-body text-center">
                <Users size={28} className="text-primary mb-2" />
                <h3>1,480</h3>
                <p>Active Users</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-dark text-light shadow">
              <div className="card-body text-center">
                <TrendingUp size={28} className="text-success mb-2" />
                <h3>92%</h3>
                <p>Growth</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-dark text-light shadow">
              <div className="card-body text-center">
                <DollarSign size={28} className="text-warning mb-2" />
                <h3>$56K</h3>
                <p>Revenue</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-dark text-light shadow">
              <div className="card-body text-center">
                <CheckCircle size={28} className="text-info mb-2" />
                <h3>37</h3>
                <p>Tasks Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Chart */}
        <div className="card bg-dark text-light shadow mb-5">
          <div className="card-body">
            <h4 className="card-title text-light mb-3">Revenue Trends</h4>
            <Line data={chartData} />
          </div>
        </div>

        {/* Tasks & Notifications */}
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card bg-dark text-light shadow">
              <div className="card-body">
                <h5 className="card-title text-light mb-3">Notifications</h5>
                <ul className="list-group list-group-flush">
                  {notifications.map((note, index) => (
                    <li key={index} className="list-group-item bg-secondary text-light border-0">
                      🔔 {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-dark text-light shadow">
              <div className="card-body">
                <h5 className="card-title d-flex align-items-center gap-2 text-light mb-3">
                  <Bell size={20} /> Modal Actions
                </h5>
                <p>Click below to open a modal with info:</p>
                <button className="btn btn-warning" onClick={() => setShowModal(true)}>
                  Open Modal
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bootstrap Modal */}
        {showModal && (
          <div
            className="modal show fade"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={() => setShowModal(false)}
          >
            <div className="modal-dialog">
              <div className="modal-content bg-dark text-light">
                <div className="modal-header">
                  <h5 className="modal-title d-flex align-items-center gap-2">
                    <Info size={20} /> Info Modal
                  </h5>
                  <button className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  This is a Bootstrap modal with highlighted dark theme!
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdvancedDashboard;
