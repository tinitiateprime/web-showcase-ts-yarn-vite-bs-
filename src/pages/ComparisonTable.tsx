// src/pages/ComparisonTable.tsx
import { useState } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";

type ProductKey = "productA" | "productB" | "productC" | "productD";

interface ComparisonRow {
  feature: string;
  productA: string;
  productB: string;
  productC: string;
  productD: string;
}

const initialData: ComparisonRow[] = [
  { feature: "Price", productA: "₹999", productB: "₹1299", productC: "₹899", productD: "₹1499" },
  { feature: "Storage", productA: "10 GB", productB: "50 GB", productC: "25 GB", productD: "100 GB" },
  { feature: "Support", productA: "Email", productB: "24/7 Chat", productC: "Email", productD: "24/7 Phone" },
];

export default function ComparisonTable() {
  const [rows, setRows] = useState<ComparisonRow[]>(initialData);
  const [newFeature, setNewFeature] = useState("");

  // ✅ FIX: accept both input + textarea (react-bootstrap Form.Control can be either)
  const handleCellChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    rowIndex: number,
    field: keyof ComparisonRow
  ) => {
    const updated = [...rows];
    updated[rowIndex][field] = e.target.value;
    setRows(updated);
  };

  const addRow = () => {
    const feature = newFeature.trim();
    if (!feature) return;

    setRows((prev) => [
      ...prev,
      { feature, productA: "", productB: "", productC: "", productD: "" },
    ]);
    setNewFeature("");
  };

  const deleteRow = (rowIndex: number) => {
    setRows((prev) => prev.filter((_, i) => i !== rowIndex));
  };

  const productKeys: ProductKey[] = ["productA", "productB", "productC", "productD"];

  return (
    <section className="min-vh-100 py-5 bg-dark text-light">
      <Container>
        <h2 className="mb-3 fw-bold text-warning">Comparison Table</h2>

        <div className="table-responsive rounded border border-warning shadow">
          <Table bordered hover variant="dark" className="align-middle mb-0">
            <thead className="bg-warning text-dark">
              <tr>
                <th style={{ width: 220 }}>Feature</th>
                <th>Product A</th>
                <th>Product B</th>
                <th>Product C</th>
                <th>Product D</th>
                <th style={{ width: 90 }} className="text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>
                    <Form.Control
                      size="sm"
                      className="bg-secondary text-light"
                      value={row.feature}
                      onChange={(e) => handleCellChange(e, rowIndex, "feature")}
                    />
                  </td>

                  {productKeys.map((key) => (
                    <td key={key}>
                      <Form.Control
                        size="sm"
                        className="bg-secondary text-light"
                        value={row[key]}
                        onChange={(e) => handleCellChange(e, rowIndex, key)}
                        placeholder="Enter value"
                      />
                    </td>
                  ))}

                  <td className="text-center">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => deleteRow(rowIndex)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className="mt-4 d-flex flex-column flex-md-row gap-2 justify-content-end">
          <Form.Control
            placeholder="New Feature Name"
            value={newFeature}
            onChange={(e) => setNewFeature(e.target.value)}
            className="w-100 w-md-auto bg-secondary text-light border border-warning"
          />
          <Button variant="warning" onClick={addRow}>
            <FaPlus className="me-1" />
            Add Row
          </Button>
        </div>
      </Container>
    </section>
  );
}
