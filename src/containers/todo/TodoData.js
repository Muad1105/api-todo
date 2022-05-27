import React from "react";
import axios from "axios";

function TodoData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  axios({
    url: url,
    method: "get",
    headers: {},
  });

  return <div>TodoData</div>;
}

export default TodoData;
