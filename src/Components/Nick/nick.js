import React from "react";
import { Link } from "react-router-dom";

const Nick = () => (
  <div>
    <Link to="/">
      <h1>Property Name</h1>
    </Link>
    {/* <h1>Nick Celaya</h1> */}
    <h2>Property Price</h2>
    <h3>Property info</h3>
  </div>
);

export default Nick;
