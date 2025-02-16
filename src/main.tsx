import { StrictMode } from "react";
import "./index.css";
import Layout from "./layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Layout />
    </Router>
  </StrictMode>
);
