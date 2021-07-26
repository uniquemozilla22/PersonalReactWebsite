import React from "react";
import Navigation from "../Navigation";

const index = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
    </>
  );
};

export default index;
