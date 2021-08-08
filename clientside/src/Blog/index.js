import React from "react";
import Layout from "../Layout";
import Blog from "../Components/Blog";
import classes from "./blogs.module.css";
import Date from "../Components/Date";

const index = () => {
  return (
    <Layout>
      <div className={classes.blog_wrapper}>
        <div className={classes.blogContainer}>
          <Blog />
        </div>
      </div>
    </Layout>
  );
};

export default index;
