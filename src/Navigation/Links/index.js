import React from "react";
import classes from "./links.module.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className={classes.navigation_links}>
      <Link path="/" className={classes.link}>
        <p>Projects</p>
      </Link>
      <Link path="/" className={classes.link}>
        <p>Blog</p>
      </Link>
      <Link path="/" className={classes.link}>
        <p>Say Hello</p>
      </Link>
    </div>
  );
};

export default index;
