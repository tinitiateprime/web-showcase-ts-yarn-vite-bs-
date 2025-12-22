import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  BarChart2,
  Users,
  DollarSign,
  Activity,
  Award,
  Filter,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const InfographicsPage: React.FC = () => {
  const initialData = [
    { label: "Users", value: 1200, color: "#0d6efd", icon: <Users size={28} /> },
    { label: "Revenue", value: 24000, color: "#198754", icon: <DollarSign size={28} /> },
    { label: "Tasks", value: 75, color: "#ffc107", icon: <Activity size={28} /> },
    { label: "Awards", value: 10, color: "#dc3545", icon: <Award size={28} /> },
  ];

  const [filteredData, setFilteredData] = useState(initialData);

  const handleFilter = (term: string) => {
    if (term.trim() === "") {
      setFilteredData(initialData);
    } else {
      setFilteredData(
        initialData.filter((d) =>
          d.label.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

  const chartData = {
    labels: filteredData.map((d) => d.label),
    datasets: [
      {
        label: "2024 Performance",
        data: filteredData.map((d) => d.value),
        backgroundColor: filteredData.map((d) => d.color),
        borderRadius: 6,
        barThickness: 40,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    onClick: (_: any, elements: any[]) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        console.log(`You clicked on ${filteredData[index].label}`);
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#f8f9fa" },
        grid: { color: "#495057" },
      },
      x: {
        ticks: { color: "#f8f9fa" },
        grid: { color: "#495057" },
      },
    },
  };

  return (
    <div className="container-fluid bg-dark min-vh-100 py-5 text-light">
      <div className="container">
        <h1 className="mb-5 text-center fw-bold d-flex justify-content-center align-items-center gap-2">
          <BarChart2 size={32} /> Infographics Dashboard
        </h1>

        {/* Filters */}
        <div className="card p-3 mb-4 shadow border rounded-4 bg-secondary text-light">
          <h5 className="mb-3 d-flex align-items-center gap-2 text-warning">
            <Filter /> Filter Data
          </h5>
          <input
            type="text"
            className="form-control bg-dark text-light border border-warning"
            placeholder="Search label (e.g. Revenue)"
            onChange={(e) => handleFilter(e.target.value)}
          />
        </div>

        {/* Stat Cards */}
        <div className="row g-4 mb-5">
          {filteredData.map((item) => (
            <div key={item.label} className="col-md-3">
              <div
                className="card shadow-sm text-center p-3 border border-2 rounded-4"
                style={{
                  borderColor: item.color,
                  backgroundColor: "#212529",
                  color: item.color,
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div>{item.icon}</div>
                <h5 className="fw-bold">{item.label}</h5>
                <p className="mb-0 fs-5 text-light">
                  {item.label === "Revenue" ? `$${item.value.toLocaleString()}` : item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bar Chart */}
        <div className="card shadow p-4 border rounded-4 bg-secondary text-light">
          <h4 className="fw-bold mb-4 text-center">Performance Overview</h4>
          <div style={{ height: "500px" }}>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfographicsPage;
