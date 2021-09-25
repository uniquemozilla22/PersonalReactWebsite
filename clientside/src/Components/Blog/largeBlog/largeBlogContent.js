import React from "react";
import classes from "./largeBlog.module.css";

const largeBlogContent = () => {
  return (
    <div className={classes.large__imageContainer}>
      <div className={classes.image__container}>
        <img
          src="https://images.unsplash.com/photo-1610997686651-98492fd08108?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9raGFyYSUyMG5lcGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="Name"
        />
      </div>
      <div className={classes.content__container}>
        <div className={classes.dateWrapper}>{new Date().getFullYear()}</div>
        <div className={classes.headingWrapper}>
          <h1>Heaven is Myth, Pokhara is Real</h1>
        </div>
      </div>
    </div>
  );
};

export default largeBlogContent;
