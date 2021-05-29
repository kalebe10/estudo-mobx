import React from "react";
import { observer } from "mobx-react-lite";
import store from '../services/Store'

const Increment = observer(() => {
    const handleIncrement = () => {
        let value = store.count + 1;
        store.setStore("count",value);
    };
    return <button onClick={handleIncrement}>Increment</button>;
});

export default Increment;
