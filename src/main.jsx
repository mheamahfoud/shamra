import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./i18n";
import { LayoutI18nProvider } from "./i18n/Layout18n.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LayoutI18nProvider>
      <Router>
        <App />
      </Router>
    </LayoutI18nProvider>
  </React.StrictMode>
);
