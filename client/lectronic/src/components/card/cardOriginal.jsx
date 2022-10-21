import React from "react";
import { BsCart } from "react-icons/bs";
import "./style.css";

function CardOriginal(props) {
  return (
    <div className="card-original">
      <div className="card-title">{props.product_name}</div>
      <div className="row">
        <div className="col-6 card-price">${props.price}</div>
        <div className="col-6 card-rating">{props.rate}</div>
      </div>
      <img className="card-image" src={props.image} alt="image" />
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
