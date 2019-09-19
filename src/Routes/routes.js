import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from "react-router-dom";
import Property from "../Components/Property/property";
import Price from "../Components/Price/price";
import Welcome from "../Components/Welcome/welcome";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/property" component={Property} />
      <Route path="/price" component={Price} />
      {/* <Redirect to="/" /> */}
    </Switch>
  </Router>
);
export default Routes;
