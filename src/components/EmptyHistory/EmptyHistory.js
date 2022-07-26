import EmptyImage from "../../images/empty.svg";
import styles from "./EmptyHistory.module.scss";

const EmptyHistory = () => {
  return (
    <div className={styles.emptyHistory}>
      <div className="fw-light">No transaction done</div>
      <img className="" src={EmptyImage} alt="" />
    </div>
  );
};

export default EmptyHistory;
