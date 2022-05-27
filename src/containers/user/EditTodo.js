import React, { Component } from "react";

export default class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      updatedValue: this.props.todo.item,
    };
  }
  updateFn(e) {
    console.log(e);
    this.setState({ updatedValue: e });
    console.log(this.state.updatedValue);
  }

  render() {
    console.log(this.state.updatedValue);
    return (
      <>
        <input
          type="text"
          value={this.state.updatedValue}
          onChange={(event) => this.updateFn(event.target.value)}
        />
        <button
          onClick={(e) =>
            this.props.changeEvent(this.props.index, this.state.updatedValue)
          }
        >
          Submit
        </button>
        <button onClick={(e) => this.props.closeSubmit(this.props.index)}>
          X
        </button>
      </>
    );
  }
}
