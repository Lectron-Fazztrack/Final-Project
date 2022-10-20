import React from "react";
import CardOriginal from "../../components/card/cardOriginal";
import subscribe from "../../img/subscribe.png";
import { BsSearch } from "react-icons/bs";
import Header from "../../components/header/header";
import "./style.css";

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row home-title"></div>
        <div className="row mb-5">
          <div className="col-lg-6">
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Headphone
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Air Conditioner
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Television
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-disabled-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-disabled"
                  type="button"
                  role="tab"
                  aria-controls="pills-disabled"
                  aria-selected="false"
                >
                  Router
                </button>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <BsSearch />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
          </div>
        </div>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <CardOriginal />
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <CardOriginal />
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <CardOriginal />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <CardOriginal />
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <CardOriginal />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabindex="0"
          >
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <CardOriginal />
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <CardOriginal />
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <CardOriginal />
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <CardOriginal />
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <CardOriginal />
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <CardOriginal />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-disabled"
            role="tabpanel"
            aria-labelledby="pills-disabled-tab"
            tabindex="0"
          >
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <CardOriginal />
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <CardOriginal />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <button type="button" class="home-button">
            View all
          </button>
        </div>
        <div className="row">
          <img src={subscribe} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
