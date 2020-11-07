import React from "react";
import TodoForm from "../ToDoForm/TodoForm";
import Todo from "../ToDoItem/Todo";
import "./ToDoList.css";
import Button from "@material-ui/core/Button";

export default class TodoList extends React.Component {
  state = {
    itemsList: [],
    itemToShow: "all",
    toggleAllComplete: true,
  };

  addTodo = (item) => {
    this.setState((state) => ({
      itemsList: [item, ...state.itemsList],
    }));
  };

  toggleComplete = (id) => {
    this.setState((state) => ({
      itemsList: state.itemsList.map((item) => {
        if (item.id === id) {
          // suppose to update
          return {
            ...item,
            complete: !item.complete,
          };
        } else {
          return item;
        }
      }),
    }));
  };

  updateTodoToShow = (s) => {
    this.setState({
      itemToShow: s,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState((state) => ({
      itemsList: state.itemsList.filter((item) => item.id !== id),
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState((state) => ({
      itemsList: state.itemsList.filter((item) => !item.complete),
    }));
  };

  render() {
    let itemsList = [];

    if (this.state.itemToShow === "all") {
      itemsList = this.state.itemsList;
    } else if (this.state.itemToShow === "active") {
      itemsList = this.state.itemsList.filter((item) => !item.complete);
    } else if (this.state.itemToShow === "complete") {
      itemsList = this.state.itemsList.filter((item) => item.complete);
    }

    return (
      <div className="listContainer">
        <h1>To Do List</h1>
        <TodoForm onSubmit={this.addTodo} />
        {itemsList.map((item) => (
          <Todo
            key={item.id}
            toggleComplete={() => this.toggleComplete(item.id)}
            onDelete={() => this.handleDeleteTodo(item.id)}
            item={item}
          />
        ))}
        <div>
          Items left:{" "}
          {this.state.itemsList.filter((item) => !item.complete).length}
        </div>
        <div>
          <Button
            className="button"
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => this.updateTodoToShow("all")}
          >
            all
          </Button>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => this.updateTodoToShow("active")}
          >
            active
          </Button>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => this.updateTodoToShow("complete")}
          >
            complete
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            size="large"
            onClick={() =>
              this.setState((state) => ({
                itemsList: state.itemsList.map((item) => ({
                  ...item,
                  complete: state.toggleAllComplete,
                })),
                toggleAllComplete: !state.toggleAllComplete,
              }))
            }
          >
            toggle all complete: {`${this.state.toggleAllComplete}`}
          </Button>
        </div>
        {this.state.itemsList.some((item) => item.complete) ? (
          <div>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              onClick={this.removeAllTodosThatAreComplete}
            >
              remove all complete items
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}
