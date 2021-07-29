import React from "react";
import Home from "./Home";
import classes from "./app.module.css";
import { Route, Switch } from "react-router";
import Projects from "./Projects/index";

function App() {
  return (
    <div className={classes.app}>
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
