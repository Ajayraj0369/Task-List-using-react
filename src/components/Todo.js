import React, { Component } from "react";
import Todoitems from "./Todoitems";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map((item) => (
      <Todoitems key={item.id} todo={item} />
    ));
  }
}

//propTypes

Todos.propTypes = {
  todos: PropTypes.array,
};

export default Todos;
