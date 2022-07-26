import { inject, observer } from "mobx-react";
import React from "react";
import EmptyHistory from "./EmptyHistory/EmptyHistory";
import TransactionComponent from "./TransactionComponent/TransactionComponent";

const DisplayResult = inject("store")(
  observer(({ store }) => {
    let { balance } = store;
    return balance === 0 ? <EmptyHistory /> : <TransactionComponent />;
  })
);

export default DisplayResult;
