import styles from "./BalanceComponent.module.scss";

import { inject, observer } from "mobx-react";

const BalanceComponent = inject("store")(
  observer(({ store }) => {
    let { balance } = store;
    return (
      <div
        className={`${styles.balanceComponent} px-4 pt-3`}
        id="balanceComponent"
      >
        <div className={`${styles.balanceComponent__text} fw-light`}>
          Current Balance
        </div>
        <div className="balanceComponent__balance fs-4 fw-semibold">
          $ {balance}
        </div>
      </div>
    );
  })
);

export default BalanceComponent;
