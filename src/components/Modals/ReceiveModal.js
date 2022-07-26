import React from "react";

const ReceiveModal = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      class="modal fade"
      id="modals__receive"
      tabindex="-1"
      aria-labelledby="modals__receive"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Receive Money
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>From</p>
            <input
              required
              id="modals__receive--from"
              type="text"
              class="form-control"
            />
            <br />
            <p>Amount</p>
            <input
              required
              type="number"
              name=""
              id="modals__receive--amount"
              class="form-control"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="submit"
              id="modals__receive--submit"
              class="btn btn-success"
              data-bs-dismiss=""
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReceiveModal;
