import React from "react";
import classes from "./data.module.css";

const index = ({ title, description, color }) => {
  return description.length >= 5 ? (
    <div className={classes.data_container}>
      <>
        <h1>{title}</h1>
        <p style={{ color: color }}>{description.split(".")[0]}</p>
        <p style={{ color: color }}>
          {description.split(".")[1]?.split(",")[0]}
        </p>
        <p style={{ color: color }}>
          {description.split(".")[1]?.split(",")[1]}
        </p>
        <p style={{ color: color }}>
          {description.split(".")[1]?.split(",")[2]}
        </p>
      </>
    </div>
  ) : (
    <div className={classes.data_section}>
      <h1 className={classes.numbers_heading}>{title}</h1>
      <p className={classes.numbers}>{description}</p>
    </div>
  );
};

export default index;
