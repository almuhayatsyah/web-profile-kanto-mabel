// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// 1. Impor BrowserRouter
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 2. Pastikan BrowserRouter membungkus App */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
