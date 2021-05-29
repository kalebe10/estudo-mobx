import React from "react";
import { observer } from "mobx-react-lite";
import Increment from "./increment";
import Decrement from "./decrement";
import Nome from "./nome";
import store from "../services/Store";

const Contador = observer(() => {
    store.setStore("asd",'asd');
    return (
        <>
            <p>Value = {store.count}</p>
            <Increment></Increment>
            <Decrement></Decrement>
            <Nome></Nome>
        </>
    );
});

export default Contador;
