import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LamaContextProvider from "./context/lamaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LamaContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LamaContextProvider>
);
