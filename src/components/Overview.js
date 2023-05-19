import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      displayedTasks: "",
    };
  }

  changeTask = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ displayedTasks: this.state.task });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New task:</label>
          <input
            type="text"
            value={this.state.task}
            onChange={this.changeTask}
          />
          <button type="submit">Submit</button>
        </form>
        <p> My tasks: {this.state.displayedTasks}</p>
      </div>
    );
  }
}

export default Overview;
