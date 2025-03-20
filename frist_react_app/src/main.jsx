import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap@5.3.0/dist/css/bootstrap.min.css"
// import "./index.css";
// import "./styles.css"
import App from "./App.jsx";

import Header from "./landingpage/Header.jsx";
import Cards from "./landingpage/Main.jsx";
import Footer from "./landingpage/Footer.jsx";
import Banner from "./landingpage/Banner.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Header />
    <Banner />
    <Cards />
    <Footer />
  </StrictMode>
);
