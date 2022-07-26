import React from "react";

const SendModal = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      class="modal fade"
      id="modals__send"
      tabindex="-1"
      aria-labelledby="modals__send"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Send Money
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>To</p>
            <input
              required
              type="text"
              id="modals__send--to"
              class="form-control"
            />
            <br />
            <p>Amount</p>
            <input
              required
              type="number"
              name=""
              id="modals__send--amount"
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
              id="modals__send--submit"
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

export default SendModal;
