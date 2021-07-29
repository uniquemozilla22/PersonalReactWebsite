import React from "react";
import { Link } from "react-router-dom";
import { Facebook, YouTube, Twitter } from "@material-ui/icons";
import classes from "./social.module.css";
const index = () => {
  return (
    <div className={classes.social_link}>
      <Link to={"/"}>
        <Facebook fontSize={"large"} />
      </Link>
      <Link to={"/"}>
        <YouTube fontSize={"large"} />
      </Link>
      <Link to={"/"}>
        <Twitter fontSize={"large"} />
      </Link>
    </div>
  );
};

export default index;
