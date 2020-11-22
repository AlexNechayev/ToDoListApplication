import React from "react";
import shortid from "shortid";
import "./TodoForm.css";
import TextField from "@material-ui/core/TextField";
import StyledButton from "../shared/StyledButton/StyledButton";

export default class TodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //prevents from the web page to refresh
    console.log("1");
    if (this.state.text === "") {
      alert("Add an item");
    } else {
      this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        complete: false,
        //Add post to database//
      });
    }
    this.setState({
      text: "",
    });
  };

  render() {
    const addItemBtn = (
      <StyledButton text={"Add Item"} onClick={this.handleSubmit} />
    );
    const textFieldInput = (
      <TextField
        id="filled-basic"
        label="Item..."
        variant="filled"
        name="text"
        color="secondary"
        value={this.state.text}
        onChange={this.handleChange}
      />
    );
    return (
      <form className="formContainer" onSubmit={this.handleSubmit}>
        {textFieldInput}
        {addItemBtn}
      </form>
    );
  }
}
