import React from "react";
import img from "../../img/product-example.png";
import { BsCart } from "react-icons/bs";
import "./style.css";

function CardOriginal() {
  return (
    <div className="card-original">
      <div className="card-title">Sennheiser HD-25</div>
      <div className="row">
        <div className="col-6 card-price">$3000</div>
        <div className="col-6 card-rating">4.9</div>
      </div>
      <img className="card-image" src={img} alt="image" />
      <div className="row">
        <button type="button" class="card-button-detail">
          Detail
        </button>
        <button type="button" class="card-button-cart">
          <BsCart className="bs-cart" />
        </button>
      </div>
    </div>
  );
}

export default CardOriginal;
