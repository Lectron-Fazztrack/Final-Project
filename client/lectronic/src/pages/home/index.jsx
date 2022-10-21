import React from "react";
import CardOriginal from "../../components/card/cardOriginal";
import subscribe from "../../img/subscribe.png";
import homebanner from "../../img/homebanner.png";
import { BsSearch, BsBag, BsCashCoin, BsBox } from "react-icons/bs";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./style.css";
import img from "../../img/product-example.png";
import ModalAdd from "../../components/modal/modalAdd";

function Home() {
  const data = [
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Headphone",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Headphone",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Headphone",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Headphone",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Air Conditioner",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Air Conditioner",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Television",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Television",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Television",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Television",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Router",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Router",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Router",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Router",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Router",
    },
    {
      product_name: "Sennheiser HD 25",
      price: 3000,
      rating: 4.9,
      image: "",
      type: "Router",
    },
  ];
  return (
    <div className="App">
      <Header />
      <div className="row home-banner">
        <div className="col-lg-6 home-banner-left">
          <div className="home-banner-title">
            Take Your Time
            <br />
            And<span className="blueblue"> Shop</span>
            <br />
            Anywhere
          </div>
          <div className="home-banner-desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit..
          </div>
          <div className="row mt-4">
            <button type="button" className="home-button-shop">
              Shop Now
            </button>
            <button type="button" className="home-button-seller">
              Be a Seller
            </button>
          </div>
        </div>
        <div className="col-lg-6 home-banner-right">
          <img src={homebanner} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row row-badge">
          <button type="button" className="home-badge">
            How it Works
          </button>
        </div>
        <div className="row home-title text-center">
          Make An
          <br />
          Order Easily
        </div>
        <ModalAdd />
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="home-card">
              <button className="home-card-icon">
                <BsBag className="home-bs-icon" />
              </button>
              <div className="home-card-title">Select Product</div>
              <div className="home-card-desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="home-card">
              <button className="home-card-icon">
                <BsCashCoin className="home-bs-icon" />
              </button>
              <div className="home-card-title">Make Payment</div>
              <div className="home-card-desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="home-card">
              <button className="home-card-icon">
                <BsBox className="home-bs-icon" />
              </button>
              <div className="home-card-title">Receive Product</div>
              <div className="home-card-desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <button type="button" className="home-badge">
            Our Product
          </button>
        </div>

        <div className="row home-title text-center">
          The Best Product
          <br />
          By Lectronic
        </div>
        <div className="row mb-5">
          <div className="col-lg-6">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
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
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
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
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
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
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
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
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
              <span className="input-group-text" id="basic-addon1">
                <BsSearch />
              </span>
            </div>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <div className="row">
              {data.map((v, k) => {
                if (v.type === "Headphone") {
                  return (
                    <div className="col-xl-4 col-lg-6 col-sm-12">
                      <CardOriginal
                        product_name={v.product_name}
                        price={v.price}
                        rate={v.rating}
                        image={img}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            <div className="row">
              {data.map((v, k) => {
                if (v.type === "Air Conditioner") {
                  return (
                    <div className="col-xl-4 col-lg-6 col-sm-12">
                      <CardOriginal
                        product_name={v.product_name}
                        price={v.price}
                        rate={v.rating}
                        image={img}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabindex="0"
          >
            <div className="row">
              {data.map((v, k) => {
                if (v.type === "Television") {
                  return (
                    <div className="col-xl-4 col-lg-6 col-sm-12">
                      <CardOriginal
                        product_name={v.product_name}
                        price={v.price}
                        rate={v.rating}
                        image={img}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-disabled"
            role="tabpanel"
            aria-labelledby="pills-disabled-tab"
            tabindex="0"
          >
            <div className="row">
              {data.map((v, k) => {
                if (v.type === "Router") {
                  return (
                    <div className="col-xl-4 col-lg-6 col-sm-12">
                      <CardOriginal
                        product_name={v.product_name}
                        price={v.price}
                        rate={v.rating}
                        image={img}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>

        <div className="row">
          <button type="button" className="home-button">
            View all
          </button>
        </div>
        <div className="row">
          <img src={subscribe} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
