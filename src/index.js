import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./styles/dark.scss";
import { DarkModeContextProvider } from "./context/darkModeContext";
import "./i18n";

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
