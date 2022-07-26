import {
  autorun,
  makeAutoObservable,
  observable,
  computed,
  action,
  configure,
} from "mobx";

configure({
  enforceActions: "always",
});

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  @observable balance = 10;

  @observable.shallow DB: object[] | string | null | undefined =
    localStorage.getItem("DB") || [];

  @action.bound
  calculateBalance = () => {};
}

export let store = new Store();
