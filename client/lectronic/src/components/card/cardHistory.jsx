import React from "react";
import img from "../../img/product-example.png";
import "./style.css";

function CardHistory() {
  return (
    <div className="card-history">
      <div className="row">
        <div className="col-lg-6">
          <div className="card-history-image-bg mr-2">
            <img className="card-history-image" src={img} alt="image" />
          </div>
          <div className="left-detail">
            <span className="badge card-history-type">Headphone</span>
            <div className="row">
              <div className="card-history-title">Sennheiser HD-25</div>
              <div className="card-history-price">1 item | $3000</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-auto">
          <div className="row">
            <span className="right-detail">
              Total<span className="card-history-prices">$3000</span>
            </span>
          </div>
          <div className="row">
            <button type="button" class="card-history-button-detail">
              Details
            </button>
            <button type="button" class="card-history-button-review">
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHistory;
