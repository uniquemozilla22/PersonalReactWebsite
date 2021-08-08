import React from "react";
import Home from "./Home";
import classes from "./app.module.css";
import { Route, Switch } from "react-router";
import Projects from "./Projects";
import Blog from "./Blog";
function App() {
  return (
    <div className={classes.app}>
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
