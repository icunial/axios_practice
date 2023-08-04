const axios = require("axios");

// Get Request

function getTodos() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos",
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

getTodos();
