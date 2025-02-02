import React from "react";
import ReactDOM from "react-dom/client";  // Обратите внимание на новый импорт
import "./index.css";
import App from "./App";
import store from "./store";

const root = document.getElementById("root");

const render = () => {
    const rootElement = ReactDOM.createRoot(root);
    rootElement.render(<App />);
};

store.subscribe(render);
render();
