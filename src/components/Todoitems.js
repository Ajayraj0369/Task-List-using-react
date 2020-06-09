import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitems extends Component {
  getStyle = () => {
    return {
      background: "#798599",
      padding: "10px",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      borderBottom: "2px #ccc solid",
    };
  };

  markComplete = (e) => {
    console.log(this.props);
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.markComplete} />{" "}
          {this.props.todo.title}{" "}
        </p>
      </div>
    );
  }
}

const itemStyle = {
  backgroundColor: "#798599",
};

//proptypes
Todoitems.propTypes = {
  todo: PropTypes.object.isRequired,
};
export default Todoitems;
