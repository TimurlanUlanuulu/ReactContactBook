import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContactBookContextProvider from "./context/ContactBookContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactBookContextProvider>
        <App />
      </ContactBookContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
