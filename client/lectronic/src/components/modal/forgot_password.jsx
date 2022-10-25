import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Forgot_Password() {
  const [show, setShow] = useState(false);
  const [next, setNext] = useState(0);

  const handleClose = () => {
    setShow(false);
    setNext(0);
  };
  const handleShow = () => setShow(true);

  const next2 = () => {
    if (next === 0) {
      return (
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
      );
    } else if (next === 1) {
      return (
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Verification Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="check verification code in your email"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
      );
    } else {
      return (
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="minimum 8 character"
                autoFocus
                style={{ marginBottom: "1rem" }}
              />

              <Form.Label>Re-type New Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="minimum 8 character"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
      );
    }
  };

  const input = () => {
    if (next < 2) {
      setNext(next + 1);
    }
  };

  const input2 = () => {
    if (next < 3 && next > 0) {
      setNext(next - 1);
    }
  };

  return (
    <>
      <p
        className="md:text-md"
        onClick={handleShow}
        style={{ cursor: "pointer" }}
      >
        Forgot Password?
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "2.5rem" }}>
            Forgot Password
          </Modal.Title>
        </Modal.Header>

        {next2()}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={input2}>
            Back
          </Button>

          <Button variant="primary" onClick={input}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Forgot_Password;
