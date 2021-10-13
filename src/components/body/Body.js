import React from "react";
import Contact from "./Contact";
import Home from "./Home";
import Menu from "./Menu";

const Body = () => {
  return (
    <div>
      <Menu></Menu>
      <Home></Home>
      <Contact></Contact>
      <Body></Body>
    </div>
  );
};

export default Body;
