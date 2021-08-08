import React from "react";
import classes from "./links.module.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className={classes.navigation_links}>
      <Link to="/projects" className={classes.link}>
        <p>Projects</p>
      </Link>
      <Link to="/blog" className={classes.link}>
        <p>Blog</p>
      </Link>
      <Link to="/" className={classes.link}>
        <p>Say Hello</p>
      </Link>
    </div>
  );
};

export default index;
