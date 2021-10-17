import React from "react";
import { Link } from "react-router-dom";
import classes from "./BlogComponent.module.css";

const BlogComponent = ({ image, title, date, tags }) => {
  return (
    <li>
      <Link to="./" className={classes.card}>
        <img src={image} className={classes.card__image} alt="" />
        <div className={classes.card__overlay}>
          <div className={classes.card__header}>
            <img
              className={classes.card__thumb}
              src="https://i.imgur.com/7D7I6dI.png"
              alt=""
            />
            <div className={classes.card__header_text}>
              <h3 className={classes.card__title}>{title}</h3>
              <span class={classes.card__tagline}>
                {tags.map((tag) => (
                  <div className={classes.tags_card__tagline}>{tag}</div>
                ))}
              </span>
              <span className={classes.card__status}>{date}</span>
            </div>
          </div>
          <p className={classes.card__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            blanditiis?
          </p>
        </div>
      </Link>
    </li>
  );
};

export default BlogComponent;
