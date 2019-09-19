import React from "react";
import { Link } from "react-router-dom";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const Welcome = () => (
  <div>
    <TextField hintText="Location" />
    <br />
    <br />
    <TextField hintText="The hint text can be as long as you want, it will wrap." />
    <br />
    <TextField id="text-field-default" defaultValue="Default Value" />
    <br />
    <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" />
    <br />

    <Link to="/nick">
      <RaisedButton label={"Submit"} primary={true} />
    </Link>
    <Link to="/jess">
      <h5>Jess</h5>
    </Link>
  </div>
);

export default Welcome;
