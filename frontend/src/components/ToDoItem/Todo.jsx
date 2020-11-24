import React from "react";
import "./Todo.css";
import Delete from "@material-ui/icons/DeleteForever";
import Checkbox from "@material-ui/core/Checkbox";

export default class Todo extends React.Component {
  render() {
    const checkBox = (
      <Checkbox
        checked={this.props.item.complete}
        inputProps={{ "aria-label": "Checkbox A" }}
        onClick={this.props.toggleComplete}
      />
    );

    const deleteBtn = <Delete onClick={this.props.onDelete} />;

    return (
      <div className="itemContainer">
        {checkBox}
        <div>{this.props.item.item}</div>
        {deleteBtn}
      </div>
    );
  }
}
