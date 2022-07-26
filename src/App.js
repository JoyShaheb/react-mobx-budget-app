import { inject, observer } from "mobx-react";
import React from "react";
import "./App.css";
import BalanceComponent from "./components/BalanceComponent/BalanceComponent";
import BottomNav from "./components/BottomNav/BottomNav";
import DisplayResult from "./components/DisplayResult";
import EmptyHistory from "./components/EmptyHistory/EmptyHistory";
import Topbar from "./components/Topbar/Topbar";
import TransactionComponent from "./components/TransactionComponent/TransactionComponent";

let App = inject("store")(
  observer(({ store }) => {
    return (
      <div className="app" id="app">
        <Topbar />
        <BalanceComponent />
        {/* <TransactionComponent /> */}
        {/* <EmptyHistory /> */}
        <DisplayResult />

        <BottomNav />
      </div>
    );
  })
);

export default App;
