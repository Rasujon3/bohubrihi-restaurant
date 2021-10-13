import React from "react";
import { Redirect, Route } from "react-router";
import Contact from "./Contact";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";

const Body = () => {
  return (
    <div>

      <Route path="/" exact component={Home}></Route>
      <Route path="/menu" exact component={Menu}></Route>
      <Route path="/contact" exact component={Contact}></Route>
      <Route path="/about" exact component={About}></Route>

      <Redirect from="/" to="/home" />

    </div>
  );
};

export default Body;
