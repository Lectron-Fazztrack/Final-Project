/* eslint-disable no-restricted-globals */
import React from "react";
import "./style.css";
import { ReactComponent as eml } from "./img/email.svg";
import { ReactComponent as pwd } from "./img/password.svg";
import login from "./img/login.png";
import welcome from "./img/welcome.png";
import arrow from "./img/arrow.png";
import { TextInput, Label, Button } from "flowbite-react";

function Login() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 relative">
      <form className="flex flex-col gap-4 ml-12 mt-28 w-4/5 md:w-1/2 lg:ml-28">
        <div className="faz1">
          <div className="mr-10 fazgray">
            <img className="fazgray2" src={arrow} alt={arrow} />
          </div>
        </div>
        <p className="font-bold text-2xl ...">Welcome Back!</p>
        <p style={{ color: "#777777" }}>
          Steps to get started, find the best stuff.
        </p>
        <div>
          <TextInput
            id="email4"
            type="email"
            placeholder="Your e-mail address"
            required={true}
            icon={eml}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            placeholder="Your password"
            required={true}
            icon={pwd}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 relative">
          <p className="md:text-md">Forgot Password?</p>
          <div className="absolute inset-y-0 right-0 w-24 lg:w-32 ...">
            <Button type="submit">Login</Button>
          </div>
        </div>
        <div>
          <p className="mt-4">Not registered yet? Create an Account </p>
        </div>
      </form>

      <div className="mt-2 mr-2 sm:-ml-32 relative fazbg">
        <img
          className="w-full"
          style={{ height: "97vmin" }}
          src={login}
          alt={login}
        />
        <img
          style={{
            position: "absolute",
            top: "67%",
            left: "12vw",
            maxWidth: "40vw",
            width: "38vw",
            height: "10rem",
          }}
          src={welcome}
          alt={welcome}
        />
      </div>
    </div>
  );
}

export default Login;
