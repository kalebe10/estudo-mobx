import { makeAutoObservable, observable, action } from "mobx";

class Store {
    count = 0;

    constructor() {
        makeAutoObservable(this, {
            count: observable,
            increment: action,
            decrement: action,
        });
    }

    setCount(value) {
        this.count = value;
    }
}
export default new Store();
