import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Contact from "./Contact";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";

const Body = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/menu" exact component={Menu}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/about" exact component={About}></Route>

        <Redirect from="/" to="/home" />
      </Switch>



    </div>
  );
};

export default Body;
