import React from "react";
import "./style.css";
import { ReactComponent as eml } from "./img/email.svg";
import { ReactComponent as pwd } from "./img/password.svg";
import register from "./img/register.png";
import arrow from "./img/arrow.png";
import { TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 relative">
      <div className="fazwh z-10">
        <form className="flex flex-col gap-4 ml-12 mt-28 w-5/6 md:w-2/3 lg:ml-28">
          <div className="faz1">
            <Link to="/">
              <div className="mr-10 fazgray">
                <img className="fazgray2" src={arrow} alt={arrow} />
              </div>
            </Link>
          </div>
          <p className="font-bold text-4xl ...">
            Welcome, Please Create an Account
          </p>
          <p style={{ color: "#777777" }}>
            Please fill in your name, email and password
          </p>
          <div>
            <TextInput
              type="text"
              placeholder="What's your name?"
              required={true}
              icon={eml}
            />
          </div>
          <div>
            <TextInput
              type="email"
              placeholder="Your e-mail address"
              required={true}
              icon={eml}
            />
          </div>
          <div>
            <TextInput
              id="password1"
              type="password"
              placeholder="Your password"
              required={true}
              icon={pwd}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute inset-y-0 right-0 w-24 lg:w-32 ...">
              <Button type="submit">Register</Button>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-2 mr-2 sm:-ml-56 relative fazbg">
        <img
          className="w-full"
          style={{ height: "97vmin" }}
          src={register}
          alt={register}
        />
      </div>
    </div>
  );
}

export default Register;
