import React, { useState, useEffect } from "react";
import {
  BarChart,
  PieChart,
  TrendingUp,
  Users,
  Eye,
  ArrowUpCircle,
  Filter,
} from "lucide-react";
import {
  Table,
  Button,
  Card,
  Collapse,
  Form,
  Pagination,
} from "react-bootstrap";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dynamicMetrics, setDynamicMetrics] = useState({
    views: 0,
    users: 0,
    conversion: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicMetrics({
        views: Math.floor(100000 + Math.random() * 100000),
        users: Math.floor(10000 + Math.random() * 5000),
        conversion: Math.floor(80 + Math.random() * 20),
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const doughnutData = {
    labels: ["Views", "Users", "Conversions"],
    datasets: [
      {
        data: [dynamicMetrics.views, dynamicMetrics.users, dynamicMetrics.conversion * 1000],
        backgroundColor: ["#0d6efd", "#198754", "#ffc107"],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    cutout: "70%", // donut hole
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
      },
    },
  };

  return (
    <div className="container py-5 bg-light min-vh-100">
      <h1 className="mb-4 text-center text-primary d-flex align-items-center justify-content-center gap-2">
        <BarChart size={32} /> Analytics Dashboard
      </h1>

      {/* Filters Toggle */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Button
          variant="info"
          onClick={() => setShowFilters(!showFilters)}
          className="d-flex align-items-center gap-2"
        >
          <Filter size={18} /> {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
        <Button variant="primary">Export</Button>
      </div>

      <Collapse in={showFilters}>
        <div className="mb-4 p-4 bg-secondary text-white rounded shadow">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Filter by metric:</Form.Label>
              <Form.Control placeholder="e.g. Conversion Rate" />
            </Form.Group>
            <Button variant="light">Apply Filter</Button>
          </Form>
        </div>
      </Collapse>

      {/* Metrics Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <Card className="h-100 shadow border-primary text-center text-bg-primary">
            <Card.Body>
              <Eye size={36} className="mb-2" />
              <h5>Total Views</h5>
              <h2>{dynamicMetrics.views.toLocaleString()}</h2>
              <small>in last 30 days</small>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="h-100 shadow border-success text-center text-bg-success">
            <Card.Body>
              <Users size={36} className="mb-2" />
              <h5>Active Users</h5>
              <h2>{dynamicMetrics.users.toLocaleString()}</h2>
              <small>currently online</small>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="h-100 shadow border-warning text-center text-bg-warning">
            <Card.Body>
              <ArrowUpCircle size={36} className="mb-2" />
              <h5>Conversion Rate</h5>
              <h2>{dynamicMetrics.conversion}%</h2>
              <small>campaign results</small>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Real Chart.js Donut */}
      <Card className="shadow border border-success mb-5 rounded-5 overflow-hidden">
        <Card.Header className="bg-success text-white d-flex align-items-center gap-2 rounded-top-5">
          <PieChart size={20} />
          Traffic Overview
        </Card.Header>
        <Card.Body className="bg-white d-flex align-items-center justify-content-center flex-column">
          <div
            className="border border-success rounded-circle d-flex align-items-center justify-content-center p-3"
            style={{ width: 300, height: 300 }}
          >
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
          <small className="text-muted mt-2">
            Live dynamic data using Chart.js
          </small>
        </Card.Body>
      </Card>

      {/* Top Metrics Table */}
      <Card className="shadow border border-dark mb-4 rounded">
        <Card.Header className="bg-dark text-white d-flex align-items-center gap-2">
          <TrendingUp size={20} />
          Top Metrics
        </Card.Header>
        <Card.Body className="p-0">
          <Table responsive striped hover className="mb-0">
            <thead className="table-dark">
              <tr>
                <th>Metric</th>
                <th>Value</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Page Views</td>
                <td>{dynamicMetrics.views.toLocaleString()}</td>
                <td className="text-success">+5%</td>
              </tr>
              <tr>
                <td>Signups</td>
                <td>3,200</td>
                <td className="text-danger">-2%</td>
              </tr>
              <tr>
                <td>Conversions</td>
                <td>{dynamicMetrics.conversion}%</td>
                <td className="text-success">+7%</td>
              </tr>
              <tr>
                <td>Revenue</td>
                <td>$45,000</td>
                <td className="text-success">+12%</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Pagination */}
      <div className="d-flex justify-content-center">
        <Pagination>
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          />
          <Pagination.Item active>{currentPage}</Pagination.Item>
          <Pagination.Next onClick={() => setCurrentPage((p) => p + 1)} />
        </Pagination>
      </div>

      {/* CTA */}
      <div className="text-center mt-4">
        <Button variant="success" size="lg">
          Download Full Report
        </Button>
      </div>
    </div>
  );
};

export default Analytics;
