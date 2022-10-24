import React, { useEffect, useState } from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import arrow from "./img/arrow.png";
import prfl from "./img/prfl.png";
import edit from "./img/edit.png";
import line from "./img/line.png";
import key from "./img/key.png";
import barrow from "./img/barrow.png";
import { Link } from "react-router-dom";
import name from "./img/name.png";
import loc from "./img/loc.png";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import useApi from "../../helpers/api";

function Profile() {
  const api = useApi();
  const [bg1, setBg1] = useState(true);
  const [bg2, setBg2] = useState(false);
  const [b, setB] = useState(false);
  const [birthdate, setBirthdate] = useState(new Date());
  const [birthdateUser, setBirthdateUser] = useState(new Date());
  const [name1, setName1] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [countryID, setCountryID] = useState("");
  const [pw, setPw] = useState("");

  const handleDate = (e) => {
    setB(true);
    setBirthdate(e.target.value);
    setBirthdateUser(birthdate);
    console.log(birthdateUser);
  };

  const handleBg1 = () => {
    setBg1(true);
    setBg2(false);
    setGender("Male");
  };

  const handleBg2 = () => {
    setBg1(false);
    setBg2(true);
    setGender("Female");
  };

  const hndlGender = () => {
    if (gender === "Male") {
      setBg1(true);
      setBg2(false);
    } else if (gender === "Female") {
      setBg1(false);
      setBg2(true);
    }
  };

  const getData = () => {
    api
      .req({
        url: "/user",
      })
      .then((res) => {
        // console.log(res.data.data);
        setName1(res.data.data.name);
        setBirthdateUser(res.data.data.date);
        setAddress(res.data.data.address);
        setGender(res.data.data.gender);
        setPhone(res.data.data.phone);
      });
  };

  const updateData = () => {
    api
      .req({
        method: "PUT",
        url: "/user",
        data: {
          name: name1,
          date: birthdate,
          address: address,
          gender: gender,
          phone: phone,
          password: pwd,
        },
      })
      .then((res) => {
        console.log("up", res.data);
      });
  };

  useEffect(() => {
    getData();
    hndlGender();
  });

  const cid = (e) => {
    if (e.target.name === "+62") {
      setCountryID("+62");
    } else if (e.target.name === "+65") {
      setCountryID("+65");
    }
  };

  const thePwd = () => {
    setPwd(pw);
  };

  return (
    <div style={{ marginBottom: "80px" }}>
      <Row className="fazprof1">
        <Link to="/" className="fazprof2">
          <img src={arrow} className="fazprof3" alt={arrow} />
        </Link>

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
        <Col sm={5} style={{ position: "relative" }}>
          <h6 style={{ fontWeight: "bold" }}>Name</h6>
          <Form.Control
            type="text"
            style={{
              padding: "15px",
              borderRadius: "10px",
              paddingLeft: "4rem",
            }}
            placeholder="What is Your Name"
            defaultValue={name1}
            onChange={(e) => setName1(e.target.value)}
          />
          <img
            src={name}
            alt={name}
            style={{
              position: "absolute",
              top: "56%",
              left: "2rem",
              width: "15px",
              height: "15px",
            }}
          />
        </Col>

        <Col sm={5}>
          <h6 style={{ fontWeight: "bold" }}>Date of birth</h6>
          <Form.Control
            type="date"
            style={{
              padding: "15px",
              borderRadius: "10px",
              paddingLeft: "4rem",
              minHeight: "3.5rem",
              maxHeight: "3.5rem",
            }}
            placeholder={b ? birthdate : "When were you born"}
            onChange={(e) => handleDate(e)}
          />
        </Col>
      </Row>

      <Row style={{ width: "80%", margin: "10vmin", gap: "20px" }}>
        <Col sm={5} style={{ position: "relative" }}>
          <h6 style={{ fontWeight: "bold" }}>Address</h6>
          <Form.Control
            type="text"
            style={{
              padding: "15px",
              borderRadius: "10px",
              paddingLeft: "4rem",
            }}
            placeholder="Where is your house address"
            defaultValue={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <img
            src={loc}
            alt={loc}
            style={{
              position: "absolute",
              top: "56%",
              left: "2rem",
              width: "15px",
              height: "15px",
            }}
          />
        </Col>
        <Col sm={5}>
          <h6 style={{ fontWeight: "bold" }}>Gender</h6>
          <div className="fazbtn">
            <div
              className={bg1 ? "fazbtn fazbackground" : "fazbtn"}
              onClick={handleBg1}
            >
              <div className="fazcss" style={{ cursor: "pointer" }}>
                <p className={bg1 ? "fazwhite" : "fazcss2"}>
                  <span
                    className={bg1 ? "fazwhite" : "fazcss2"}
                    style={{ width: "20px", height: "20px" }}
                  >
                    &#9794;
                  </span>
                  &nbsp; &nbsp; Male
                </p>
              </div>
            </div>
            <div
              className={bg2 ? "fazbtn fazbackground" : "fazbtn"}
              onClick={handleBg2}
            >
              <div className="fazcss" style={{ cursor: "pointer" }}>
                <p className={bg2 ? "fazwhite" : "fazcss2"}>
                  <span
                    className={bg2 ? "fazwhite" : "fazcss2"}
                    style={{ width: "20px", height: "20px" }}
                  >
                    &#9792;
                  </span>
                  &nbsp; &nbsp; Female
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row style={{ width: "80%", margin: "10vmin", gap: "20px" }}>
        <Col sm={5}>
          <h6 style={{ fontWeight: "bold" }}>Phone Number</h6>
          <InputGroup className="mb-3">
            <Dropdown>
              <Dropdown.Toggle
                id="input-group-dropdown-1"
                style={{
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <div style={{ display: "flex" }}>
                  {countryID !== "" ? countryID : "+62"} &nbsp;&nbsp;
                  <img
                    src={barrow}
                    alt={barrow}
                    style={{
                      width: "16px",
                      height: "10px",
                      marginTop: "6.6px",
                    }}
                  />
                  &nbsp;
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item name="+62" onClick={(e) => cid(e)}>
                  +62 - Indonesia
                </Dropdown.Item>
                <Dropdown.Item name="+65" onClick={(e) => cid(e)}>
                  +65 - Singapore
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              type="number"
              placeholder="Enter your phone number"
              aria-label="Text input with dropdown button"
              style={{ padding: "15px" }}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col sm={5}>
          <h6 style={{ fontWeight: "bold" }}>Password</h6>
          <InputGroup className="mb-3" style={{ position: "relative" }}>
            <Form.Control
              type="password"
              style={{ padding: "15px", paddingLeft: "4rem" }}
              defaultValue="12345"
              onChange={(e) => setPw(e.target.value)}
            />
            <img
              src={key}
              alt={key}
              style={{
                position: "absolute",
                top: "39%",
                left: "1.8rem",
                width: "16px",
                height: "16px",
              }}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              style={{ color: "#415FE7" }}
              onClick={thePwd}
            >
              Change
            </Button>
          </InputGroup>
        </Col>
      </Row>

      <Row style={{ marginLeft: "11.8vmin" }}>
        <Button
          style={{
            padding: "10px",
            minWidth: "100px",
            width: "15%",
            borderRadius: "10px",
            border: "none",
            fontWeight: "bold",
          }}
          className="fazhvrsubmit"
          onClick={updateData}
        >
          Submit
        </Button>
      </Row>
    </div>
  );
}

export default Profile;
