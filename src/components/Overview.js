import React, { Component } from "react";

class Overview extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    );
  }
}

export default Overview;
