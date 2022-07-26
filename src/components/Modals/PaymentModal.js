const PaymentModal = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      class="modal fade"
      id="modals__payment"
      tabindex="-1"
      aria-labelledby="modals__payment"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Make Payment
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>purpose</p>
            <input
              required
              type="text"
              id="modals__payment--purpose"
              class="form-control"
            />
            <br />
            <p>Amount</p>
            <input
              required
              type="number"
              name=""
              id="modals__payment--amount"
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
              id="modals__payment--submit"
              data-bs-dismiss=""
              class="btn btn-success"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PaymentModal;
