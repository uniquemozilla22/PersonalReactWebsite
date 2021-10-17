import React from "react";
import { Link } from "react-router-dom";
import classes from "./BlogSmalls.module.css";

const BlogsSmalls = ({ title }) => {
  return (
    <div className={classes.postcard__footer}>
      <div className={classes.postcard__author}>
        <Link className={classes.author__avatar_wrap} to="#">
          <img
            className={classes.author__avatar}
            src="https://raw.githubusercontent.com/alawe45/Html-Css-postcard/master/images/author__image.png"
            alt="Profile for Darlene Robertson"
          />
        </Link>
        <div className={classes.author__info}>
          <address className={classes.author__name_wrap}>
            <Link className={classes.author__name} to="./">
              {title}
            </Link>
          </address>
          <time className={classes.author__time}>March 12, 2021</time>
        </div>
      </div>
    </div>
  );
};

export default BlogsSmalls;
