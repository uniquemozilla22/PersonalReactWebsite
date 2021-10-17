import React from "react";
import classes from "./Blog.module.css";
import BlogComponent from "./component/BlogComponent";
import Widget from "./Widget/Widget";

const Blog = () => {
  const [datas, setDatas] = React.useState({
    image:
      "https://images.unsplash.com/photo-1610997686651-98492fd08108?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9raGFyYSUyMG5lcGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    title: "This is where it all started",
    date: new Date().getFullYear(),
    tags: ["happy", "home", "started"],
  });

  return (
    <div className={classes.blog__containerPage}>
      <ul className={classes.cards}>
        <BlogComponent
          image={datas.image}
          title={datas.title}
          date={datas.date}
          tags={datas.tags}
        />
        <BlogComponent
          image={datas.image}
          title={datas.title}
          date={datas.date}
          tags={datas.tags}
        />
        <BlogComponent
          image={datas.image}
          title={datas.title}
          date={datas.date}
          tags={datas.tags}
        />
      </ul>
      <div className={classes.featured__container}>
        <Widget title="Recents" />
        <Widget title="Top View" />
      </div>
    </div>
  );
};

export default Blog;
