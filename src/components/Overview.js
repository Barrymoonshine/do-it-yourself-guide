import { useState } from "react";

const Overview = (() => {
  const tasks = [];

  const Taskslist = () => {
    const listItems = tasks.map((task) => <li key={task.title}></li>);

    return <ul>{listItems}</ul>;
  };

  return { Taskslist };
})();

export default Overview;
