import React from "react"
import './Todo.css'


export default class Todo extends React.Component {
    state = {  }
    render() {
        return (
        <div className="itemContainer">
            <div
                style={{textDecoration: this.props.item.complete ? "line-through" : ""}}
                onClick={this.props.toggleComplete}
            >
                {this.props.item.text}
            </div>
            <button className="delButton" onClick={this.props.onDelete}>x</button>
        </div> 
        );
    }
}

