import React from "react";
import { Link } from "react-router-dom";
import BlogsSmalls from "./blogsmalls/BlogsSmalls";
import classes from "./Widget.module.css";

const SmallBlog = ({ title }) => {
  return (
    <div className={classes.smallBlog__wrapper}>
      <div className={classes.smallContent__container}>
        <div className={classes.headingContainer}>
          <h2>
            <Link to={"./" + title}>{title}</Link>
          </h2>
          <hr />
        </div>
      </div>
      <div className={classes.articleContainer}>
        <BlogsSmalls title={"This is the part where it all begins."} />
        <BlogsSmalls title={"This is the part where it all begins."} />
      </div>
    </div>
  );
};

export default SmallBlog;
