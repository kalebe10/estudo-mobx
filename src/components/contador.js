import React from "react";
import { observer } from "mobx-react-lite";
import Increment from "./increment";
import Decrement from "./decrement";
import store from "../services/Store";

const Contador = observer(() => {
    return (
        <>
            <p>Value = {store.count}</p>
            <Increment></Increment>
            <Decrement></Decrement>
        </>
    );
});

export default Contador;
