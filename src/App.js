import React from "react";
import Contador from "./components/contador";
import store from './services/Store'
const App =() => {
    return (
        <>
            <h1>Hello</h1>
            <p>Nome = {store.nome}</p>
            <Contador/>
        </>
    );
};

export default App;
