import React, { Component } from "react";

export default class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }

  render() {
    return (
      <input
        type="text"
        value={this.props.todo}
        onChange={(event) => this.props.changeEvent(this, event.target.value)}
      />
    );
  }
}
