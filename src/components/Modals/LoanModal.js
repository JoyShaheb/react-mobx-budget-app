import React from "react";

const LoanModal = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      class="modal fade"
      id="modals__loan"
      tabindex="-1"
      aria-labelledby="modals__loan"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Make Loan
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Purpose</p>
            <input type="text" class="form-control" value="Loan" readonly />
            <br />
            <p>Amount</p>
            <input
              required
              type="number"
              name=""
              id="modals__loan--amount"
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
              id="modals__loan--submit"
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

export default LoanModal;
