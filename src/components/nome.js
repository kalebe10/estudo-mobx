import React from "react";
import { observer } from "mobx-react-lite";
import store from '../services/Store'

const Nome = observer(() => {
    store.setStore("asd",'Teste');
    return <h3 >{store.asd}</h3>;
});

export default Nome;
