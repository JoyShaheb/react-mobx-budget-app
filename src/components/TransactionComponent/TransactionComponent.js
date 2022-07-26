import CardComponent from "../Cards/CardComponent";
import styles from "./TransactionComponent.module.scss";

const TransactionComponent = () => {
  let data = {
    id: "102dsc",
    reason: "sdjknc",
    title: "djsmac",
    date: "today",
    color: "green",
    amount: 20,
  };
  return (
    <div className={`${styles.transaction} px-4 py-2`}>
      <div className={`${styles.transaction__text} mb-2`}>
        <div className={`${styles.transaction__text__title} fw-semibold`}>
          transaction
        </div>
        <div className={styles.transaction__text__button}>see all</div>
      </div>
      <div className={styles.transaction__history}>
        <CardComponent data={data} />
      </div>
    </div>
  );
};

export default TransactionComponent;
