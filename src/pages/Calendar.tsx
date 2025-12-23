import { useState } from "react";

import {
  Calendar as BigCalendar,
  dateFnsLocalizer,
  type Event,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  format,
  parse,
  startOfWeek,
  getDay,
} from "date-fns";
import { enUS } from "date-fns/locale";

import { Container, Button, Modal, Form } from "react-bootstrap";
import { Calendar2EventFill } from "react-bootstrap-icons";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

type CalendarEvent = Event & {
  title: string;
  start: Date;
  end: Date;
};

export default function Calendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      title: "Project Deadline",
      start: new Date(),
      end: new Date(),
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newStart, setNewStart] = useState("");
  const [newEnd, setNewEnd] = useState("");

  const addEvent = () => {
    if (newTitle && newStart && newEnd) {
      setEvents((prev) => [
        ...prev,
        {
          title: newTitle,
          start: new Date(newStart),
          end: new Date(newEnd),
        },
      ]);

      setShowModal(false);
      setNewTitle("");
      setNewStart("");
      setNewEnd("");
    }
  };

  return (
    <Container className="py-5">
      <div className="bg-light rounded shadow p-4 border">
        <h2 className="mb-4 text-primary d-flex align-items-center gap-2">
          <Calendar2EventFill /> Calendar
        </h2>

        <Button variant="success" onClick={() => setShowModal(true)}>
          + Add Event
        </Button>

        <div className="mt-4 rounded border p-2 bg-white">
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
      </div>

      {/* Modal for adding events */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Event title"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Start</Form.Label>
              <Form.Control
                type="datetime-local"
                value={newStart}
                onChange={(e) => setNewStart(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>End</Form.Label>
              <Form.Control
                type="datetime-local"
                value={newEnd}
                onChange={(e) => setNewEnd(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addEvent}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}


