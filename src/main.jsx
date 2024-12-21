import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Portfolio from "./Portfolio.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
);