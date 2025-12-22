import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  Badge,
  Modal,
} from "react-bootstrap";
import { Cart, Trash, CheckCircle } from "react-bootstrap-icons";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Wireless Mouse", price: 25, quantity: 1 },
    { id: 2, name: "Mechanical Keyboard", price: 79, quantity: 1 },
    { id: 3, name: "HD Monitor", price: 199, quantity: 1 },
  ]);

  const [showModal, setShowModal] = useState(false);

  const increment = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrement = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="py-5">
      <Card className="shadow border-0 bg-light">
        <Card.Header className="bg-primary text-white d-flex align-items-center gap-2">
          <Cart size={24} />
          <h4 className="m-0">Your Shopping Cart</h4>
        </Card.Header>
        <Card.Body className="bg-white rounded">
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center border-0 border-bottom"
              >
                <div className="d-flex flex-column">
                  <span className="fw-bold text-dark">{item.name}</span>
                  <span className="text-muted">${item.price.toFixed(2)}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Button
                    variant="outline-success"
                    onClick={() => decrement(item.id)}
                  >
                    -
                  </Button>
                  <Badge bg="info">{item.quantity}</Badge>
                  <Button
                    variant="outline-success"
                    onClick={() => increment(item.id)}
                  >
                    +
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash />
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Row className="mt-4">
            <Col>
              <h5 className="fw-bold text-success">
                Total: ${totalPrice.toFixed(2)}
              </h5>
            </Col>
            <Col className="text-end">
              <Button
                variant="success"
                onClick={() => setShowModal(true)}
                className="d-flex align-items-center gap-2"
              >
                <CheckCircle />
                Checkout
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Checkout Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Order Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for your purchase! 🎉</p>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.quantity}x {item.name}
              </li>
            ))}
          </ul>
          <p className="fw-bold text-success">Total: ${totalPrice.toFixed(2)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ShoppingCart;
