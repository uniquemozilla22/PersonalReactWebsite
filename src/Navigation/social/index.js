import React from "react";
import { Link } from "react-router-dom";
import { Facebook, YouTube, Twitter } from "@material-ui/icons";
import classes from "./social.module.css";
const index = () => {
  return (
    <div className={classes.social_link}>
      <Link to={"/"}>
        <Facebook fontSize={"medium"} color={"#000"} />
      </Link>
      <Link to={"/"}>
        <YouTube fontSize={"medium"} />
      </Link>
      <Link to={"/"}>
        <Twitter fontSize={"medium"} />
      </Link>
    </div>
  );
};

export default index;
