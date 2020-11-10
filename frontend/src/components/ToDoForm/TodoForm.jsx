import React from "react";
import shortid from "shortid";
import "./TodoForm.css";
import TextField from "@material-ui/core/TextField";
import StyledButton from '../shared/StyledButton'

export default class TodoForm extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //prevents the refresh of the web page
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
    return (
      <form className="formContainer" onSubmit={this.handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Item..."
          variant="outlined"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <StyledButton
          text={"Add Item"}
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}
