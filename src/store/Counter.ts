import { makeObservable, observable, action } from "mobx";
class Counter {
  constructor() {
    makeObservable(this, {
      count: observable,
      increaseCount: action,
      decreaseCount: action
    })
  }
  count = 0;
  increaseCount() {
    this.count++;
  }
  decreaseCount() {
    if (this.count === 0) {
      return;
    }
    this.count--;
  }
}

export default new Counter()