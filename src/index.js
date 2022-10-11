import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import NavbarCap from "./components/Navbar-cap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarCap />
      <MainContent />
      <Footer />
    </div>
  )

}
ReactDOM.render(<App />, document.getElementById("root"))