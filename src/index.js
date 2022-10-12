import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import NavbarCap from "./components/Navbar-cap";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider";


function App() {
  const [ActiveCate, SetActiveCat] = React.useState(0);
  function changeCategory(id) {
    SetActiveCat(id)

  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <NavbarCap />
        <Switch>
          <Route exact path="/">
            <MainContent changeCategory={changeCategory} activeCat={ActiveCate} />
          </Route>
          <Route path="/slider">
            <Slider activeCat={ActiveCate} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )

}
ReactDOM.render(<App />, document.getElementById("root"))