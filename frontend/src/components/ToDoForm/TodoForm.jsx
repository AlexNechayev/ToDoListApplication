import React from "react";
import shortid from "shortid";
import "./TodoForm.css";

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
    event.preventDefault();
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
        <input
          className="input"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Item..."
        />
        <button className="button" onClick={this.handleSubmit}>
          Add Item
        </button>
      </form>
    );
  }
}
