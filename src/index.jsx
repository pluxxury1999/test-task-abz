import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";
import "./media.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
reportWebVitals();