import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaPlus, FaTrash, FaGripVertical } from "react-icons/fa";

const initialItems = [
  { id: "1", content: "Learn React" },
  { id: "2", content: "Build a project" },
  { id: "3", content: "Deploy to production" },
];

const DragDrop: React.FC = () => {
  const [items, setItems] = useState(initialItems);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Animate fade-in on load
    setTimeout(() => setAnimated(true), 200);
  }, []);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reordered = Array.from(items);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setItems(reordered);
  };

  const addItem = () => {
    const nextId = (items.length + 1).toString();
    setItems([...items, { id: nextId, content: `New Task ${nextId}` }]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <section className="min-vh-100 bg-light py-5">
      <Container
        className={`transition-opacity ${animated ? "opacity-100" : "opacity-0"}`}
      >
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h1 className="fw-bold text-primary mb-3">
              <FaGripVertical className="me-2 text-success" />
              Advanced Drag & Drop
            </h1>
            <p className="text-muted">Reorder, add, or remove tasks dynamically</p>
            <Button variant="success" onClick={addItem} className="mt-2">
              <FaPlus className="me-2" /> Add Task
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable-tasks">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="rounded p-3 bg-white shadow"
                  >
                    {items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <Card
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`mb-3 transition shadow-sm border-start border-4 ${
                              snapshot.isDragging
                                ? "border-primary shadow-lg"
                                : "border-success"
                            }`}
                            style={{
                              transform: snapshot.isDragging
                                ? "scale(1.03)"
                                : "scale(1)",
                              transition: "transform 0.2s ease",
                            }}
                          >
                            <Card.Body className="d-flex justify-content-between align-items-center">
                              <span className="text-dark fw-semibold">
                                <FaGripVertical className="me-2 text-secondary" />
                                {item.content}
                              </span>
                              <Button
                                size="sm"
                                variant="danger"
                                onClick={() => removeItem(item.id)}
                                className="transition"
                              >
                                <FaTrash />
                              </Button>
                            </Card.Body>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DragDrop;
