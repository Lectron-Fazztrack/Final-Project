import React from "react";
import img from "../../img/product-example.png";
import { BsTrash } from "react-icons/bs";
import "./style.css";

function CardAdmin() {
  return (
    <div className="card-admin">
      <div className="row">
        <div className="col-lg-6">
          <div className="card-admin-image-bg mr-2">
            <img className="card-admin-image" src={img} alt="image" />
          </div>
          <div className="left-detail">
            <span className="badge card-admin-type">Headphone</span>
            <div className="row">
              <div className="card-admin-title">Sennheiser HD-25</div>
              <div className="card-admin-price">$3000</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-auto">
          <div className="row">
            <button type="button" class="card-admin-button-edit">
              Detail
            </button>
            <button type="button" class="card-admin-button-trash">
              <BsTrash className="bs-cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAdmin;
