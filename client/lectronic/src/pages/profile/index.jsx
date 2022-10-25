import React from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import arrow from "./img/arrow.png";
import prfl from "./img/prfl.png";
import edit from "./img/edit.png";
import line from "./img/line.png";

function Profile() {
  return (
    <div style={{ marginBottom: "80px" }}>
      <Row className="fazprof1">
        <div className="fazprof2">
          <img src={arrow} className="fazprof3" alt={arrow} />
        </div>
        <img src={prfl} className="fazprof4" alt={prfl} />
        <img src={edit} className="fazprof5" alt={edit} />
      </Row>
      <Row className="fazr2">
        <h1 style={{ fontWeight: "bold" }}>Edit your personal bio</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <img style={{ width: "84%" }} src={line} alt={line} />
      </Row>

      <Row style={{ width: "80%", margin: "10vmin", gap: "20px" }}>
        <Col sm={5}>
          <h6 style={{ fontWeight: "bold" }}>Name</h6>
          <Form.Control style={{ padding: "15px" }} placeholder="First name" />
        </Col>
        <Col sm={5}>
          <h6 style={{ fontWeight: "bold" }}>Date of birth</h6>
          <Form.Control style={{ padding: "15px" }} placeholder="Last name" />
        </Col>
      </Row>

      <Row style={{ width: "80%", margin: "10vmin", gap: "20px" }}>
        <Col sm={5}>
          <h6 style={{ fontWeight: "bold" }}>Address</h6>
          <Form.Control style={{ padding: "15px" }} placeholder="First name" />
        </Col>
        <Col sm={5}>
          <h6 style={{ fontWeight: "bold" }}>Gender</h6>
          <Form.Control style={{ padding: "15px" }} placeholder="Last name" />
        </Col>
      </Row>

      <Row style={{ width: "80%", margin: "10vmin", gap: "20px" }}>
        <Col sm={5}>
          <h6 style={{ fontWeight: "bold" }}>Phone Number</h6>
          <Form.Control style={{ padding: "15px" }} placeholder="First name" />
        </Col>
        <Col sm={5}>
          <h6 style={{ fontWeight: "bold" }}>Password</h6>
          <Form.Control style={{ padding: "15px" }} placeholder="Last name" />
        </Col>
      </Row>

      <Row style={{ marginLeft: "11.8vmin" }}>
        <Button
          style={{ padding: "10px", minWidth: "100px", width: "15%" }}
          variant="primary"
        >
          Submit
        </Button>
      </Row>
    </div>
  );
}

export default Profile;
