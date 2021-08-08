import React from "react";
import classes from "./navigation.module.css";
import Links from "./Links";
import Logo from "./Logo";
import Social from "./social";
import { Sort, Close } from "@material-ui/icons";
const Index = () => {
  const [showContent, setShowContent] = React.useState(false);

  return (
    <div className={classes.navigation_bar}>
      <div className={classes.options}>
        <button onClick={() => setShowContent(!showContent)}>
          {showContent ? <Close className={classes.close_icon} /> : <Sort />}
        </button>
        {showContent ? <Links /> : null}
      </div>
      <Logo />
      <Social />
    </div>
  );
};

export default Index;
