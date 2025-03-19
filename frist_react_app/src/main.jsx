import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./index.css";
import App from "./App.jsx";

import Header from "./landingpage/Header.jsx";
import Cards from "./landingpage/Main.jsx";
import Footer from "./landingpage/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Header />
    <Cards />
    <Footer />
  </StrictMode>
);
