import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./services/Store";
import {Provider} from "mobx-react"
ReactDOM.render(
    <React.StrictMode>
        <Provider {...store}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
