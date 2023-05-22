import "./App.css";
import Overview from "./components/Overview";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      displayedTasks: [],
    };
  }

  changeTask = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  resetForm() {
    this.setState({
      task: "",
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      displayedTasks: [...this.state.displayedTasks, this.state.task],
    });
    this.resetForm();
  };

  render() {
    const { task, displayedTasks } = this.state;
    return (
      <div className="TaskContainer">
        <form onSubmit={this.handleSubmit}>
          <label>New task:</label>
          <input type="text" value={task} onChange={this.changeTask} />
          <button type="submit">Submit</button>
        </form>
        <p> My tasks:</p>
        <Overview tasks={displayedTasks} />
      </div>
    );
  }
}

export default App;
