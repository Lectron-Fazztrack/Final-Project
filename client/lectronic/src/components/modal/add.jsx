import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import useApi from "../../helpers/api";

function AddProduct() {
  const [data, setData] = useState({});

  const navigate = useNavigate();
  const api = useApi();

  const onChangeInput = (event) => {
    event.preventDefault();

    const tmpdata = { ...data };
    tmpdata[event.target.name] = event.target.value;
    setData(tmpdata);
  };

  const onChangeFile = (event) => {
    event.preventDefault();

    const file = event.target.files[0];
    if (file) {
      const tmpdata = { ...data };
      tmpdata["image"] = file;
      setData(tmpdata);
    }
  };

  const postData = async () => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(`${key}`, data[key]);
    }
    api
      .req({
        method: "POST",
        url: "/products",
        headers: { "Content-Type": "multipart/form-data" },
        data: formData,
      })
      .then((res) => {
        navigate("/products");
      })
      .catch((err) => {
        console.log(data);
        alert(err);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <label class="form-label form-labels">Name</label>
          <input
            name="name"
            type="text"
            class="form-control form-control-lg mb-3 modal-forms"
            placeholder="Input name product..."
            onChange={onChangeInput}
          ></input>
        </div>
        <div className="col-lg-6">
          <label class="form-label form-labels">Price</label>
          <input
            name="price"
            type="number"
            class="form-control form-control-lg mb-3 modal-forms"
            placeholder="Input price product..."
            onChange={onChangeInput}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <label class="form-label form-labels">Stock</label>
          <input
            name="stock"
            type="number"
            class="form-control form-control-lg mb-3 modal-forms"
            placeholder="Input stock product..."
            onChange={onChangeInput}
          ></input>
        </div>
        <div className="col-lg-6">
          <label class="form-label form-labels">Description</label>
          <input
            name="description"
            type="text"
            class="form-control form-control-lg mb-3 modal-forms"
            placeholder="Input description product..."
            onChange={onChangeInput}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <label class="form-label form-labels">Category</label>
          <select
            name="type"
            className="form-select modal-forms"
            onChange={onChangeInput}
          >
            <option value="Headphone">Input category product...</option>
            <option value="Headphone">Headphone</option>
            <option value="Air Conditioner">Air Conditioner</option>
            <option value="Television">Television</option>
            <option value="Router">Router</option>
          </select>
        </div>
        <div className="col-lg-6">
          <label class="form-label form-labels">Image (max 5)</label>
          <input
            name="image"
            type="file"
            class="form-control mb-3 modal-forms"
            onChange={onChangeFile}
          ></input>
        </div>
      </div>
      <button type="button" class="modal-button-submit mt-3" onClick={postData}>
        Submit
      </button>
    </div>
  );
}

export default AddProduct;
