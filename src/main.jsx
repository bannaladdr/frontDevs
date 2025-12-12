import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import MainLayout from "./app/layout/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainLayout></MainLayout>
  </StrictMode>
);
