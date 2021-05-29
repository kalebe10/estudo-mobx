import React from "react";
import { observer } from "mobx-react-lite";
import store from '../services/Store'

const Decrement = observer(() => {
    const handleDecrement = () => {
        let value = store.count - 1;
        store.setStore("count",value);
    };
    return <button onClick={handleDecrement}>Decrement</button>;
});

export default Decrement;
