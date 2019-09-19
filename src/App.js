import React from "react";
import "./App.css";
import Routes from "./Routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const App = () => {
  return (
    <Router>
      <div className="App">
        <MuiThemeProvider>
          <Routes />
        </MuiThemeProvider>
      </div>
    </Router>
  );
};

export default App;
