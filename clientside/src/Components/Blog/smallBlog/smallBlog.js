import React from "react";
import classes from "./smallBlog.module.css";

const smallBlog = () => {
  return (
    <div
      className={classes.smallBlog__wrapper}
      style={{
        backgroundImage: `url(
          "https://cdn.dribbble.com/users/2878214/screenshots/6465983/man_portrait_vector_4x.jpg?compress=1&resize=400x300"
        )`,
      }}
    >
      <div className={classes.smallContent__container}>
        <div className={classes.dateContainer}>{new Date().getFullYear()}</div>
        <div className={classes.headingContainer}>
          <h4>This is what life is meant to be</h4>
        </div>
      </div>
    </div>
  );
};

export default smallBlog;
