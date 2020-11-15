import React from "react";
import TodoForm from "../ToDoForm/TodoForm";
import Todo from "../ToDoItem/Todo";
import "./ToDoList.css";
import StyledButton from "../shared/StyledButton/StyledButton";
import ToDoService from "../../ToDoService";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.toDoService = new ToDoService();
    this.state = {
      itemsList: [],
      itemToShow: "all",
      toggleAllComplete: true,
    };
  }

  // UNSAFE_componentWillMount() {
  //   //Backend: Get item-list from server side
  //   //if list empty, do nothing.
  // }

  //Every item contain 3 attributes: id, text, completed.
  //The "addTodo" function retrieves an item as parameter and adds to the current state of the itemList
  addToDo = (item) => {
    this.setState((state) => ({
      itemsList: [item, ...state.itemsList],
    }));
    this.toDoService.AddToDo(item)
    //Backend: Post item
  };

  toggleComplete = (id) => {
    this.setState((state) => ({
      itemsList: state.itemsList.map((item) => {
        if (item.id === id) {
          //Backend: Attribute: "complete" update.
          console.log("found item with identical id");
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

  updateToDoToShow = (s) => {
    this.setState({
      itemToShow: s,
    });
  };

  handleDeleteToDo = (id) => {
    this.setState((state) => ({
      itemsList: state.itemsList.filter((item) => item.id !== id),
    }));
    //Backend : Server side removes the item from the list
  };

  removeAllToDosThatAreComplete = () => {
    this.setState((state) => ({
      itemsList: state.itemsList.filter((item) => !item.complete),
    }));
  };

  handleListSelect() {
    if (this.state.itemToShow === "all") {
      return this.state.itemsList;
    } else if (this.state.itemToShow === "active") {
      return this.state.itemsList.filter((item) => !item.complete);
    } else if (this.state.itemToShow === "complete") {
      return this.state.itemsList.filter((item) => item.complete);
    }
    return null;
  }

  render() {
    //export to function
    const title = <h1 className="title">To Do List</h1>;

    const allBtn = (
      <StyledButton text={"ALL"} onClick={() => this.updateToDoToShow("all")} />
    );
    const completeBtn = (
      <StyledButton
        text={"COMPLETE"}
        onClick={() => this.updateToDoToShow("complete")}
      />
    );
    const activeBtn = (
      <StyledButton
        text={"ACTIVE"}
        onClick={() => this.updateToDoToShow("active")}
      />
    );

    const removeAllBtn = (
      <StyledButton
        text={"remove all complete items"}
        onClick={this.removeAllToDosThatAreComplete}
      />
    );

    let itemsList = this.handleListSelect();

    return (
      <div className="listContainer">
        {title}
        <TodoForm onSubmit={this.addToDo} />
        {itemsList.map((item) => (
          <Todo
            key={item.id}
            toggleComplete={() => this.toggleComplete(item.id)}
            onDelete={() => this.handleDeleteToDo(item.id)}
            item={item}
          />
        ))}
        <div>
          Items left:{" "}
          {this.state.itemsList.filter((item) => !item.complete).length}
        </div>
        <div>
          {allBtn}
          {activeBtn}
          {completeBtn}
        </div>
        <div>
          {this.state.itemsList.some((item) => item.complete)
            ? removeAllBtn
            : null}
        </div>
      </div>
    );
  }
}
