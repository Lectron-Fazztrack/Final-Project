import React from "react";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useApi from "../../helpers/api";
import "./style.css";

function CardAdmin(props) {
  const navigate = useNavigate();
  const detail = () => {
    navigate("/products/detail/" + props.id);
  };

  const api = useApi();

  const deleteProduct = (id) => {
    api
      .req({
        method: "DELETE",
        url: `/products/` + props.id,
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card-admin">
      <div className="row">
        <div className="col-lg-6">
          <div className="card-admin-image-bg mr-2">
            <img className="card-admin-image" src={props.image} alt="image" />
          </div>
          <div className="left-detail">
            <span className="badge card-admin-type">{props.type}</span>
            <div className="row">
              <div className="card-admin-title">{props.name}</div>
              <div className="card-admin-price">${props.price}</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-auto">
          <div className="row">
            <button
              onClick={detail}
              type="button"
              class="card-admin-button-edit"
            >
              Detail
            </button>
            <button
              onClick={deleteProduct}
              type="button"
              class="card-admin-button-trash"
            >
              <BsTrash className="bs-cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAdmin;
