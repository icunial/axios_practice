const axios = require("axios");

// Get Request

function getTodos() {
  //   axios({
  //     method: "get",
  //     url: "https://jsonplaceholder.typicode.com/todos",
  //     params: {
  //       _limit: 5,
  //     },
  // })
  axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

//getTodos();

// Post Request

function addTodo() {
  /*   axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "New Todo",
      completed: "false",
    },
  }) */
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "New Todo",
      completed: false,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

// addTodo();

// Put Request

function updateTodo() {
  axios
    .put("https://jsonplaceholder.typicode.com/todos/1", {
      title: "Updated Todo",
      completed: true,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

updateTodo();
