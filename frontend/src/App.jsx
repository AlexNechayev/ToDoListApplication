import React from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}
