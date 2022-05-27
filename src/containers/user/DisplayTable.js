import React, { Component } from "react";

class InputTable extends Component {
  render() {
    return (
      <div className="input-table">
        <form>
          <label htmlFor="userName">
            User Name
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>

          <button onClick={updateUserList}>Add Todo</button>
        </form>
      </div>
    );
  }
}
