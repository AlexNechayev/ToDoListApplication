import React from "react";
import "./Todo.css";
import Delete from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

export default class Todo extends React.Component {
  state = {};
  render() {
    return (
      <div className="itemContainer">
        <Checkbox
          value={this.props.item.complete}
          inputProps={{ "aria-label": "Checkbox A" }}
          onClick={this.props.toggleComplete}
        />
        <div>{this.props.item.text}</div>
        <Delete onClick={this.props.onDelete} />
      </div>
    );
  }
}
