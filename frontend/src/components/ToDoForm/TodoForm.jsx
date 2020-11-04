import React from "react";
import shortid from "shortid";
import "./TodoForm.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
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
        <Button
          size="large"
          variant="contained"
          color="primary"
          disableElevation
          onClick={this.handleSubmit}
        >
          Add Item
        </Button>
      </form>
    );
  }
}
