import React from "react";
import TodoForm from "../ToDoForm/TodoForm";
import Todo from "../ToDoItem/Todo";
import "./ToDoList.css";
import StyledButton from "../shared/StyledButton/StyledButton";
import ToDoService from "../../ToDoService";

let toDoService = ToDoService.getInstance();

export default class TodoList extends React.Component {
  state = {
    itemsList: [],
    itemToShow: "all",
    toggleAllComplete: true,
  };

  async componentDidMount() {
    let items = await toDoService.getItemList();
    this.setState({ itemsList: items });
  }

  addToDo = async (item) => {
    let id = await toDoService.addToDo(item);
    item.id = id;
    this.setState((state) => ({
      itemsList: [item, ...state.itemsList],
    }));
  };

  toggleComplete = (item) => {
    this.setState((state) => ({
      itemsList: state.itemsList.map((itemObj) => {
        if (itemObj._id === item._id) {
          ///
          toDoService.toggleItemComplete(item._id);
          ///
          console.log("found item with identical id");
          return {
            ...itemObj,
            complete: !itemObj.complete,
          };
        } else {
          return itemObj;
        }
      }),
    }));
  };

  updateToDoToShow = (s) => {
    this.setState({
      itemToShow: s,
    });
  };

  handleDeleteToDo = (item) => {
    this.setState((state) => ({
      itemsList: state.itemsList.filter((i) => i._id !== item._id),
    }));
    ///
    toDoService.removeItem(item._id);
    ///
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
            key={item._id}
            toggleComplete={() => this.toggleComplete(item)}
            onDelete={() => this.handleDeleteToDo(item)}
            item={item}
          ></Todo>
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
