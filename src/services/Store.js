import { makeAutoObservable, observable, action } from "mobx";

class Store {
    count = 0;
    nome='kalebe'
    constructor() {
        makeAutoObservable(this, {
            count: observable,
            setStore:action
        });
    }

    setStore(elm,value) {
        this[elm] = value;
    }
}
export default new Store();
