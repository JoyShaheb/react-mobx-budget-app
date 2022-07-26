import LoanModal from "../Modals/LoanModal";
import PaymentModal from "../Modals/PaymentModal";
import ReceiveModal from "../Modals/ReceiveModal";
import SendModal from "../Modals/SendModal";
import styles from "./BottomNav.module.scss";

const BottomNav = () => {
  return (
    <div className={styles.bottomNav}>
      <div
        className="bottomNav__payment"
        data-bs-toggle="modal"
        data-bs-target="#modals__payment"
      >
        <i className="bi bi-cart2"></i>
        <p>Payment</p>
      </div>

      {/* Modal here for payment button */}
      <PaymentModal />

      <div
        className="bottomNav__receive"
        data-bs-toggle="modal"
        data-bs-target="#modals__receive"
      >
        <i className="bi bi-credit-card-2-front"></i>
        <p>Receive</p>
      </div>

      {/* Modal here for receive button */}
      <ReceiveModal />

      <div
        className="bottomNav__send"
        data-bs-toggle="modal"
        data-bs-target="#modals__send"
      >
        <i className="bi bi-send-plus"></i>
        <p>send</p>
      </div>
      {/* Modal here for payment button */}
      <SendModal />
      <div
        className="bottomNav__loan"
        data-bs-toggle="modal"
        data-bs-target="#modals__loan"
      >
        <i className="bi bi-cash-coin"></i>
        <p>loan</p>
      </div>

      {/* Modal here for payment button */}
      <LoanModal />
    </div>
  );
};

export default BottomNav;
