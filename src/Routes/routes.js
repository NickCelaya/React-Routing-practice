import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from "react-router-dom";
import Nick from "../Components/Nick/nick";
import Jess from "../Components/Jess/jess";
import Welcome from "../Components/Welcome/welcome";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/nick" component={Nick} />
      <Route path="/jess" component={Jess} />
      {/* <Redirect to="/" /> */}
    </Switch>
  </Router>
);
export default Routes;
