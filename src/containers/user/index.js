import React, { Component } from "react";
import EditTodo from "./EditTodo";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfTasks: [],
      newTask: "",
    };
    this.addTask = this.addTask.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  onChange(e) {
    console.log("onChange", e.target.value);
    this.setState({
      listOfTasks: [...this.state.listOfTasks],
      newTask: e.target.value,
    });
    console.log(this.state);
  }

  render() {
    return (
      <>
        <h3>Todo List</h3>
        <ul>{this.renderTheTasks()}</ul>
        <input
          type="text"
          onChange={this.onChange.bind(this)}
          style={{ width: "120px" }}
        />
        <button onClick={this.addTask}>Add Task</button>
      </>
    );
  }

  componentDidMount() {
    let defs = this.props.defaultTasks;
    if (!this.isNullOrWhiteSpace(defs)) {
      this.setState({
        listOfTasks: defs.split(","),
      });
    }
  }

  // custom functions

  isNullOrWhiteSpace(value) {
    return !value || value.replaceAll(" ", "").length < 1;
  }

  changeEvent(index, e, todo) {
    let prevState = this.state;
    prevState.listOfTasks[index] = todo;
    this.setState(prevState);
  }

  renderTheTasks() {
    console.log(this.state.listOfTasks);
    return this.state.listOfTasks.map((data, index) => {
      let lId = "l" + index;
      let bId = "b" + index;

      return (
        <li key={index} id={lId}>
          {data}
          <button
            onClick={this.removeItem.bind(this.state)}
            id={bId}
            // style={{ border: "0px", background: "transparent" }}
          >
            X
          </button>
          <button onClick={(e) => this.editItem(index)}>edit</button>
          {this.editComponent && (
            <EditTodo
              todo={this.state.listOfTasks[index]}
              changeEvent={this.changeEvent.bind(this, index)}
            />
          )}
        </li>
      );
    });
  }

  addTask() {
    console.log("click", this.state.newTask);
    const inpValue = this.state.newTask;
    if (this.isNullOrWhiteSpace(inpValue)) return;
    this.setState((prevState, props) => ({
      listOfTasks: [...prevState.listOfTasks, inpValue],
      newTask: "",
    }));
  }

  removeItem(e) {
    const id = e.target.id;
    const index = Number(id.substring(1, id.length));
    const array = this.state.listOfTasks;
    array.splice(index, 1);
    console.log(id, index, array);

    this.setState(array);
  }

  editItem(e) {
    console.log("hello", e);
    // this.editComponent = true;
    const id = e;
    const index = Number(id.substring(1, id.length));
    const array = this.state.listOfTasks;
  }
}
