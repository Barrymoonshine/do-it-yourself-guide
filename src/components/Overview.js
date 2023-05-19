import React, { Component } from "react";

class Overview extends Component {
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New task:</label>
          <input type="text" value={task} onChange={this.changeTask} />
          <button type="submit">Submit</button>
        </form>
        <p> My tasks:</p>
        <ul>
          {displayedTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Overview;
