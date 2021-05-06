import React, { useState } from "react";
import "./App.scss";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch, useLocation } from "react-router-dom";
import DesignPage from "./Components/DesignPage/DesignPage";
import DeveloperPage from "./Components/DeveloperPage/DeveloperPage";
import gsap from "gsap";
import { AnimatePresence,  } from "framer-motion";
import { withRouter } from "react-router-dom";
import AboutPage from "./Components/AboutPage/AboutPage";
import Cursors from "./Components/Cursor/Cursors";
import Cursor from "./Components/Cursor/CursorCursor";
import { pageDataArr } from "./Components/util/utils";
function App(props) {
  const location = useLocation();
  window.onload = () => {
    gsap.from(document.body, {
      opacity: 0,
      duration: 1,
      ease: "Power3.easeInOut",
    });
    let cursor = new Cursor(document.getElementsByClassName("cursor")[0]);
  };

  if (
    props.history.location.pathname === "/" ||
    props.history.location.pathname === "/designer"
  ) {
    document.body.style.backgroundColor = "#ffd42d";
  } else if (props.history.location.pathname === "/developer") {
    document.body.style.backgroundColor = "#fb6542";
  } else if (props.history.location.pathname === "/about") {
    document.body.style.backgroundColor = " #1544cd";
  }

  const [pageData ] = useState(pageDataArr);
  return (
    <>
      <Cursors />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/about"
            component={() => <AboutPage text="Who" pageData={pageData[1]} />}
          />
          <Route
            exact
            path="/designer"
            component={() => (
              <DesignPage page="" text="" pageData={pageData[2]} />
            )}
          />
          <Route
            exact
            path="/developer"
            component={() => (
              <DeveloperPage
                page="develop"
                text="Develop"
                pageData={pageData[3]}
              />
            )}
          />
          <Route
            exact
            path="/"
            component={() => (
              <HomePage page="home" text="Hello!" pageData={pageData[0]} />
            )}
          />
        </Switch>
      </AnimatePresence>
    </>
  );
}
export default withRouter(App);
