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

  render() {
    return (
      <div>
        <form>
          <label>New task:</label>
          <input
            type="text"
            value={this.state.task}
            onChange={this.changeTask}
          />
          <button id="submit-task-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Overview;
