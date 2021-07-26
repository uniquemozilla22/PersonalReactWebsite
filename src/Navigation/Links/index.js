import React from "react";
import classes from "./links.module.css";
import { Link } from "react-router-dom";
import {
  WorkOutlineOutlined,
  ImportContacts,
  EmojiPeopleOutlined,
} from "@material-ui/icons";
const index = () => {
  return (
    <div className={classes.navigation_links}>
      <Link path="/" className={classes.link}>
        <WorkOutlineOutlined />
        <p>Projects</p>
      </Link>
      <Link path="/" className={classes.link}>
        <ImportContacts fontSize={"16"} />
        <p>Blog</p>
      </Link>
      <Link path="/" className={classes.link}>
        <p>Say Hello</p>
        <EmojiPeopleOutlined />
      </Link>
    </div>
  );
};

export default index;
