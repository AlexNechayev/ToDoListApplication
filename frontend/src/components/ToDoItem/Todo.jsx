import React from "react";
import "./Todo.css";
import Delete from "@material-ui/icons/DeleteForever";
import Checkbox from "@material-ui/core/Checkbox";

export default class Todo extends React.Component {
  render() {
    return (
      <div className="itemContainer">
        <Checkbox
          checked={this.props.item.complete}
          inputProps={{ "aria-label": "Checkbox A" }}
          onClick={this.props.toggleComplete}
        />
        <div>{this.props.item.text}</div>
        <Delete onClick={this.props.onDelete} />
      </div>
    );
  }
}
