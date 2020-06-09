import React from "react";
import Todos from "./components/Todo";
import "./App.css";

class APP extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Dinner",
        completed: true,
      },
      {
        id: 3,
        title: "Watch that movie",
        completed: false,
      },
    ],
  };
  render() {
    console.log(this.state.todos);
    return (
      // <div className="App">
      <Todos todos={this.state.todos} />
      // </div>
    );
  }
}
export default APP;
