import React, { useState } from "react";
import { Container, Button, Row, Col, Modal, Form } from "react-bootstrap";
import Editor, { OnChange } from "@monaco-editor/react";
import { FaSave, FaTrash, FaMoon, FaSun, FaCode } from "react-icons/fa";

const AdvancedEditor: React.FC = () => {
  const [code, setCode] = useState<string>("// Start typing your code here...");
  const [theme, setTheme] = useState<"vs-dark" | "light">("vs-dark");
  const [showModal, setShowModal] = useState(false);

  const handleEditorChange: OnChange = (value) => {
    setCode(value || "");
  };

  const handleClear = () => {
    setShowModal(true);
  };

  const confirmClear = () => {
    setCode("// Start typing your code here...");
    setShowModal(false);
  };

  return (
    <Container className="py-5">
      <div className="bg-light rounded shadow border p-4">
        <Row className="mb-3 align-items-center">
          <Col className="d-flex align-items-center gap-2">
            <FaCode className="text-primary" size={28} />
            <h2 className="mb-0 fw-bold">Advanced Editor</h2>
          </Col>
          <Col className="text-end d-flex justify-content-end gap-2">
            <Button
              variant={theme === "vs-dark" ? "light" : "dark"}
              onClick={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}
              className="d-flex align-items-center gap-1"
            >
              {theme === "vs-dark" ? (
                <>
                  <FaSun />
                  Light
                </>
              ) : (
                <>
                  <FaMoon />
                  Dark
                </>
              )}
            </Button>
            <Button
              variant="success"
              onClick={() => alert("Code saved successfully!")}
              className="d-flex align-items-center gap-1"
            >
              <FaSave />
              Save
            </Button>
            <Button
              variant="danger"
              onClick={handleClear}
              className="d-flex align-items-center gap-1"
            >
              <FaTrash />
              Clear
            </Button>
          </Col>
        </Row>

        <div style={{ height: "500px", border: "1px solid #dee2e6", borderRadius: "0.375rem", overflow: "hidden" }}>
          <Editor
            height="100%"
            defaultLanguage="javascript"
            value={code}
            theme={theme}
            onChange={handleEditorChange}
          />
        </div>
      </div>

      {/* Clear confirmation modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-danger text-white">
          <Modal.Title>Confirm Clear</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to clear your code? This cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmClear}>
            Clear Code
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdvancedEditor;
