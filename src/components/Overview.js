import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  changeTask = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.task}`);
    event.preventDefault();
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
      </div>
    );
  }
}

export default Overview;
