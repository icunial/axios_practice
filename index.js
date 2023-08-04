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

getTodos();
