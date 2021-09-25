import React from "react";
import classes from "./Blog.module.css";
import LargeBlogContent from "./largeBlog/largeBlogContent";
import SmallBlog from "./smallBlog/smallBlog";

const index = () => {
  return (
    <div className={classes.blog__containerPage}>
      <LargeBlogContent />
      <div className={classes.featured__container}>
        <div className={classes.heading__featured}>
          <h3>Featured</h3>
        </div>
        <SmallBlog />
        <SmallBlog />
        <SmallBlog />
      </div>
    </div>
  );
};

export default index;
