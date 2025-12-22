import { useState } from "react";
import {
  Table,
  InputGroup,
  FormControl,
  Button,
  Pagination,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";

interface RowData {
  id: number;
  name: string;
  email: string;
  status: string;
}

const initialData: RowData[] = [
  { id: 1, name: "Alice", email: "alice@example.com", status: "Active" },
  { id: 2, name: "Bob", email: "bob@example.com", status: "Inactive" },
  { id: 3, name: "Charlie", email: "charlie@example.com", status: "Pending" },
  { id: 4, name: "David", email: "david@example.com", status: "Active" },
  { id: 5, name: "Eve", email: "eve@example.com", status: "Active" },
];

const DataTable = () => {
  const [data, setData] = useState<RowData[]>(initialData);
  const [search, setSearch] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  const handleDelete = (id: number) => {
    setData(data.filter((row) => row.id !== id));
  };

  const handleEdit = (id: number) => {
    setEditingId(id);
  };

  const handleSave = (id: number, name: string, email: string, status: string) => {
    const updated = data.map((row) =>
      row.id === id ? { ...row, name, email, status } : row
    );
    setData(updated);
    setEditingId(null);
  };

  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase()) ||
      row.status.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <section className="min-vh-100 py-5 bg-dark text-light">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="text-center fw-bold mb-3 d-flex justify-content-center align-items-center gap-2 text-warning">
              📊 Data Table
            </h1>
            <InputGroup>
              <InputGroup.Text className="bg-secondary text-light">
                <FaSearch />
              </InputGroup.Text>
              <FormControl
                placeholder="Search..."
                className="bg-dark text-light border border-warning"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="table-responsive rounded border border-warning shadow">
              <Table
                bordered
                hover
                variant="dark"
                className="align-middle mb-0"
              >
                <thead className="bg-warning text-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((row) => (
                    <tr
                      key={row.id}
                      className="transition"
                      style={{ transition: "background-color 0.3s" }}
                    >
                      <td>
                        {editingId === row.id ? (
                          <FormControl
                            className="bg-secondary text-light"
                            defaultValue={row.name}
                            onBlur={(e) =>
                              handleSave(row.id, e.target.value, row.email, row.status)
                            }
                          />
                        ) : (
                          row.name
                        )}
                      </td>
                      <td>
                        {editingId === row.id ? (
                          <FormControl
                            className="bg-secondary text-light"
                            defaultValue={row.email}
                            onBlur={(e) =>
                              handleSave(row.id, row.name, e.target.value, row.status)
                            }
                          />
                        ) : (
                          row.email
                        )}
                      </td>
                      <td>
                        {editingId === row.id ? (
                          <FormControl
                            className="bg-secondary text-light"
                            defaultValue={row.status}
                            onBlur={(e) =>
                              handleSave(row.id, row.name, row.email, e.target.value)
                            }
                          />
                        ) : (
                          row.status
                        )}
                      </td>
                      <td className="text-center">
                        <Button
                          variant="outline-warning"
                          size="sm"
                          className="me-2"
                          onClick={() =>
                            editingId === row.id
                              ? setEditingId(null)
                              : handleEdit(row.id)
                          }
                        >
                          <FaEdit />
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDelete(row.id)}
                        >
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="d-flex justify-content-center">
            <Pagination variant="dark">
              {[...Array(totalPages)].map((_, idx) => (
                <Pagination.Item
                  key={idx + 1}
                  active={idx + 1 === currentPage}
                  onClick={() => setCurrentPage(idx + 1)}
                  className="bg-secondary text-light border border-warning"
                >
                  {idx + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DataTable;
