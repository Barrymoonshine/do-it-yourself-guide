import "./App.css";
import Overview from "./components/Overview";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to my first React app - the Tasks Transpiler!
        <Overview />
      </div>
    );
  }
}

export default App;
