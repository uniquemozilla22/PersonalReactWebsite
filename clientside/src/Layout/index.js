import React from "react";
import Navigation from "../Navigation";
import Particle from "./Particles";

const index = (props) => {
  return (
    <>
      <Particle />
      <Navigation />
      {props.children}
    </>
  );
};

export default index;
