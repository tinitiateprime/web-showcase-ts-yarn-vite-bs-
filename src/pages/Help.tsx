import React, { useState } from "react";
import { HelpCircle, PhoneCall, Mail, Users, FileText, Shield } from "lucide-react";
import { Modal, Button, Accordion, Offcanvas } from "react-bootstrap";

const Help: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <div className="container py-5 bg-light min-vh-100">
      {/* Offcanvas trigger */}
      <Button variant="secondary" className="mb-3" onClick={() => setShowOffcanvas(true)}>
        Open Help Menu
      </Button>

      {/* Offcanvas */}
      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Quick Links</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            <li><a href="#contact" className="text-decoration-none">Contact Support</a></li>
            <li><a href="#faq" className="text-decoration-none">FAQs</a></li>
            <li><a href="#docs" className="text-decoration-none">Documentation</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="card shadow-lg border-0">
        <div className="card-body">
          <h2 className="card-title d-flex align-items-center gap-2 text-primary mb-4">
            <HelpCircle size={28} />
            Help Center
          </h2>
          <p className="card-text mb-4">
            Welcome to our support center. Choose an option below to get help:
          </p>

          <div className="row g-4">
            {/* Contact Support Card */}
            <div className="col-md-4">
              <div className="bg-primary text-white rounded p-3 h-100 d-flex flex-column justify-content-between shadow">
                <div>
                  <PhoneCall size={28} className="mb-2" />
                  <h5>Contact Support</h5>
                  <p className="small">Reach out to our support team via phone or email.</p>
                </div>
                <Button variant="light" onClick={() => setShowModal(true)}>
                  Contact
                </Button>
              </div>
            </div>
            {/* Email Support */}
            <div className="col-md-4">
              <div className="bg-success text-white rounded p-3 h-100 d-flex flex-column justify-content-between shadow">
                <div>
                  <Mail size={28} className="mb-2" />
                  <h5>Email Support</h5>
                  <p className="small">Send us an email for detailed assistance.</p>
                </div>
                <Button variant="light">Send Email</Button>
              </div>
            </div>
            {/* Community Forums */}
            <div className="col-md-4">
              <div className="bg-warning text-dark rounded p-3 h-100 d-flex flex-column justify-content-between shadow">
                <div>
                  <Users size={28} className="mb-2" />
                  <h5>Community Forums</h5>
                  <p className="small">Ask questions and share with other users.</p>
                </div>
                <Button variant="dark">Join Community</Button>
              </div>
            </div>
          </div>

          {/* Accordion for FAQs */}
          <div className="mt-5" id="faq">
            <h4 className="mb-3 d-flex align-items-center gap-2 text-secondary">
              FAQs
            </h4>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I reset my password?</Accordion.Header>
                <Accordion.Body>
                  Go to account settings and click on “Reset Password.”
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How can I contact support?</Accordion.Header>
                <Accordion.Body>
                  You can use the Contact Support button or send us an email directly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Where is my data stored?</Accordion.Header>
                <Accordion.Body>
                  We store your data securely in encrypted cloud storage.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* Documentation and Security */}
          <div className="mt-5" id="docs">
            <h4 className="mb-3 d-flex align-items-center gap-2 text-secondary">
              <FileText size={22} />
              Documentation
            </h4>
            <p className="text-muted">
              Explore our extensive documentation to solve issues on your own.
            </p>

            <h4 className="mt-4 mb-3 d-flex align-items-center gap-2 text-secondary">
              <Shield size={22} />
              Security & Privacy
            </h4>
            <p className="text-muted">
              Learn about our security policies and how we protect your data.
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Contact Support */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Support</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Our support team is available 24/7 to assist you.</p>
          <Button variant="primary" className="me-2">Call Now</Button>
          <Button variant="secondary">Send Email</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Help;
