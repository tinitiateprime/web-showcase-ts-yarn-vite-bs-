import { useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaBalanceScale,
  FaPlus,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

interface ComparisonRow {
  feature: string;
  productA: boolean;
  productB: boolean;
  productC: boolean;
  productD: boolean;
}

const initialData: ComparisonRow[] = [
  { feature: "Free Shipping", productA: true, productB: true, productC: false, productD: true },
  { feature: "24/7 Support", productA: true, productB: false, productC: true, productD: true },
  { feature: "Unlimited Storage", productA: false, productB: true, productC: true, productD: false },
  { feature: "Custom Reports", productA: true, productB: true, productC: false, productD: true },
];

const Comparison = () => {
  const [data, setData] = useState<ComparisonRow[]>(initialData);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newFeature, setNewFeature] = useState<string>("");

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setData([
        ...data,
        {
          feature: newFeature,
          productA: false,
          productB: false,
          productC: false,
          productD: false,
        },
      ]);
      setNewFeature("");
    }
  };

  const handleDeleteRow = (index: number) => {
    setData(data.filter((_, idx) => idx !== index));
  };

  const toggleBoolean = (rowIndex: number, product: keyof Omit<ComparisonRow, "feature">) => {
    const updated = [...data];
    updated[rowIndex][product] = !updated[rowIndex][product];
    setData(updated);
  };

  const handleFeatureChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const updated = [...data];
    updated[idx].feature = e.target.value;
    setData(updated);
  };

  return (
    <section className="min-vh-100 py-5 bg-dark text-light">
      <Container>
        <div className="mb-4 text-center">
          <h1 className="fw-bold text-warning d-flex justify-content-center align-items-center gap-2">
            <FaBalanceScale /> Product Comparison
          </h1>
          <p className="text-secondary">Compare features side by side interactively</p>
        </div>

        <div className="table-responsive rounded border border-warning shadow">
          <Table bordered hover variant="dark" className="align-middle mb-0">
            <thead className="bg-warning text-dark">
              <tr>
                <th>Feature</th>
                <th>Product A</th>
                <th>Product B</th>
                <th>Product C</th>
                <th>Product D</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  style={{ transition: "background-color 0.3s" }}
                  className="hover bg-secondary-subtle"
                >
                  <td>
                    {editingIndex === idx ? (
                      <Form.Control
                        size="sm"
                        className="bg-secondary text-light"
                        value={row.feature}
                        onChange={(e) => handleFeatureChange(e, idx)}
                        onBlur={() => setEditingIndex(null)}
                        autoFocus
                      />
                    ) : (
                      <span
                        onClick={() => setEditingIndex(idx)}
                        style={{ cursor: "pointer" }}
                      >
                        {row.feature}
                        <FaEdit className="text-light ms-2" />
                      </span>
                    )}
                  </td>
                  {(["productA", "productB", "productC", "productD"] as const).map((product) => (
                    <td
                      key={product}
                      className="text-center"
                      onClick={() => toggleBoolean(idx, product)}
                      style={{ cursor: "pointer" }}
                    >
                      {row[product] ? (
                        <FaCheckCircle className="text-success fs-5" />
                      ) : (
                        <FaTimesCircle className="text-danger fs-5" />
                      )}
                    </td>
                  ))}
                  <td className="text-center">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDeleteRow(idx)}
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
          <Button variant="warning" onClick={handleAddFeature}>
            <FaPlus className="me-1" />
            Add Feature
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Comparison;

