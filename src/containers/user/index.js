import React, { Component } from "react";
import EditTodo from "./EditTodo";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfTasks: [],
      newTask: "",
      editComponent: false,
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
      const val = defs.split(",").map((e, i) => {
        return { item: e, num: i, showEdit: false };
      });
      console.log(val);
      this.setState({
        listOfTasks: val,
      });
    }
  }

  // custom functions

  isNullOrWhiteSpace(value) {
    return !value || value.replaceAll(" ", "").length < 1;
  }

  changeEvent(index, todo) {
    let prevState = this.state;
    console.log(index, todo);
    prevState.listOfTasks[index].item = todo;
    this.setState(prevState);
  }

  closeSubmit(el) {
    console.log(el);
    const reAlterItems = this.state.listOfTasks.map((e, i) => {
      if (i == el) {
        console.log(e, i, el);
        return { ...e, showEdit: false };
      } else {
        return e;
      }
    });
    this.setState({ ...this.state, listOfTasks: reAlterItems });
  }

  renderTheTasks() {
    console.log(this.state.listOfTasks);
    return this.state.listOfTasks.map((data, index) => {
      let lId = "l" + index;
      let bId = "b" + index;

      return (
        <li key={index} id={lId}>
          {data.item}
          <button
            onClick={this.removeItem.bind(this)}
            id={bId}
            // style={{ border: "0px", background: "transparent" }}
          >
            X
          </button>
          <button onClick={(e) => this.editItem(index)}>edit</button>
          {this.state.listOfTasks[index].showEdit && (
            <EditTodo
              index={index}
              todo={this.state.listOfTasks[index]}
              changeEvent={this.changeEvent.bind(this)}
              closeSubmit={this.closeSubmit.bind(this)}
            />
          )}
        </li>
      );
    });
  }

  addTask() {
    console.log("click", this.state.newTask);
    const inpValue = {
      item: this.state.newTask,
      num: this.state.listOfTasks.length,
    };
    if (this.isNullOrWhiteSpace(inpValue.item)) return;
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

  editItem(el) {
    console.log("hello", el);
    const alteredItems = this.state.listOfTasks.map((e, i) => {
      if (i == el) {
        return { ...e, showEdit: true };
      } else return e;
    });
    console.log(alteredItems);
    this.setState({ ...this.state, listOfTasks: alteredItems });
    const id = el;
    console.log(id);
    // const index = Number(id.substring(1, id.length));
  }
}
