import React from "react";
import { Link } from "react-router-dom";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const Welcome = () => (
  <div>
    {/* <TextField hintText="Location" />
    <br />
    <br />
    <TextField hintText="The hint text can be as long as you want, it will wrap." />
    <br />
    <TextField id="text-field-default" defaultValue="Default Value" />
    <br />
    <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" />
    <br />

    <Link to="/property">
      <RaisedButton label={"Submit"} primary={true} />
    </Link> */}
    <Link to="/property">
      <h5>Property</h5>
    </Link>
    <Link to="/price">
      <h5>Price</h5>
    </Link>
  </div>
);

export default Welcome;
