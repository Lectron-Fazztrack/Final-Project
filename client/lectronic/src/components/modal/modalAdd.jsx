import React from "react";
import "./style.css";

function ModalAdd() {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content modal-contents">
            <div class="modal-header">
              <h1 class="modal-title" id="exampleModalLabel">
                Add Product
              </h1>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-lg-6">
                  <label class="form-label form-labels">Name</label>
                  <input
                    type="text"
                    class="form-control form-control-lg mb-3 modal-forms"
                    placeholder="Input name product..."
                  ></input>
                </div>
                <div className="col-lg-6">
                  <label class="form-label form-labels">Price</label>
                  <input
                    type="number"
                    class="form-control form-control-lg mb-3 modal-forms"
                    placeholder="Input price product..."
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label class="form-label form-labels">Stock</label>
                  <input
                    type="number"
                    class="form-control form-control-lg mb-3 modal-forms"
                    placeholder="Input stock product..."
                  ></input>
                </div>
                <div className="col-lg-6">
                  <label class="form-label form-labels">Description</label>
                  <input
                    type="text"
                    class="form-control form-control-lg mb-3 modal-forms"
                    placeholder="Input description product..."
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <label class="form-label form-labels">Category</label>
                  <input
                    type="text"
                    class="form-control form-control-lg mb-3 modal-forms"
                    placeholder="Input category product..."
                  ></input>
                </div>
                <div className="col-lg-6">
                  <label class="form-label form-labels">Image (max 5)</label>
                  <input
                    type="file"
                    class="form-control mb-3 modal-forms"
                  ></input>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="modal-button-submit mt-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAdd;
