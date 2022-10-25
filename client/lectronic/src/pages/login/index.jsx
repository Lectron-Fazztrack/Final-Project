/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import "./style.css";
// import { ReactComponent as eml } from "./img/person.svg";
// import { ReactComponent as pwd } from "./img/password.svg";
import key from "./img/key.png";
import person from "./img/person.png";
import log from "./img/log.png";
import welcome from "./img/welcome.png";
import arrow from "./img/arrow.png";
import { TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useApi from "../../helpers/api";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/reducer/user";
import ForgotPassword from "../../components/modal/forgot_password";

function Login() {
  const { isAuth } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const api = useApi();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logs = async (e) => {
    e.preventDefault();
    try {
      api
        .req({
          method: "POST",
          url: "/login",
          data: {
            email: email,
            password: password,
          },
        })
        .then((res) => {
          const { token } = res.data.data;
          dispatch(login(token));
          navigate("/");
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const input = (e) => {
    e.preventDefault();

    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 relative">
      <div className="fazwh z-10">
        <form className="flex flex-col gap-4 ml-12 mt-28 w-5/6 md:w-2/3 lg:ml-28 xl:mt-32">
          <div className="faz1">
            <Link to="/">
              <div className="mr-10 fazgray fazhov2">
                <img className="fazgray2" src={arrow} alt={arrow} />
              </div>
            </Link>
          </div>
          <p className="font-bold text-4xl ...">Welcome Back!</p>
          <p style={{ color: "#777777" }}>
            Steps to get started, find the best stuff.
          </p>
          <div style={{ position: "relative" }}>
            <TextInput
              type="email"
              name="email"
              placeholder="Your e-mail address"
              required={true}
              onChange={input}
              style={{ paddingLeft: "3rem" }}
            />
            <img
              src={person}
              alt={person}
              style={{
                position: "absolute",
                top: "33%",
                left: "1rem",
                width: "15px",
                height: "15px",
              }}
            />
          </div>
          <div style={{ position: "relative" }}>
            <TextInput
              id="password1"
              name="password"
              type="password"
              placeholder="Your password"
              required={true}
              onChange={input}
              style={{ paddingLeft: "3rem" }}
            />
            <img
              src={key}
              alt={key}
              style={{
                position: "absolute",
                top: "36%",
                left: "1rem",
                width: "15px",
                height: "15px",
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
            <ForgotPassword />
            <div className="absolute inset-y-0 right-0 w-24 lg:w-32 ...">
              <Button
                style={{ fontWeight: "bold" }}
                type="submit"
                onClick={logs}
              >
                Login
              </Button>
            </div>
          </div>

          <div className="mt-5 ml-3">
            <p className="mt-4" style={{ fontWeight: "bold", display: "flex" }}>
              Not registered yet?&nbsp;
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#0300AD" }}
              >
                Create an Account
              </Link>
            </p>
          </div>
        </form>
      </div>

      <div className="mt-2 mr-2 sm:-ml-40 relative fazbg">
        <img
          className="w-full"
          style={{ height: "97vmin" }}
          src={log}
          alt={log}
        />
        <img
          style={{
            position: "absolute",
            top: "67%",
            left: "12vw",
            maxWidth: "42vmax",
            width: "40vmax",
            height: "11rem",
          }}
          src={welcome}
          alt={welcome}
        />
      </div>
    </div>
  );
}

export default Login;
