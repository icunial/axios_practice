const axios = require("axios");

// AXIOS GLOBALS
axios.defaults.headers.common["X-Auth-Token"] = "sometoken";

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
    .get("https://jsonplaceholder.typicode.com/todos?_limit=5", {
      timeout: 5,
    })
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

// updateTodo();

// Delete Request

function removeTodo() {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

// removeTodo();

// Simultaneous requests

function getData() {
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/posts"),
    ])
    /* .then((res) => {
      console.log(res[0].data);
      console.log(res[1].data);
    }) */
    .then(
      axios.spread((todos, posts) => {
        console.log(todos.data);
      })
    )
    .catch((err) => console.error(err));
}

// getData();

// Intercepting Requests & Responses
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request send to ${
        config.url
      } at ${new Date().getTime()}`
    );

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//getData();

// Costum Headers

function customHeaders() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "someToken",
    },
  };
  axios
    .post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "New Todo",
        completed: false,
      },
      config
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

//customHeaders();

// Transforming requests & responses

function transformResponse() {
  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "Hello World!",
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  };

  axios(options).then((res) => console.log(res.config));
}

//transformResponse();

// Error Handling

function errorHandling() {
  axios
    .get("https://jsonplaceholder.typicode.com/todoss")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // Request was made but no response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}

//errorHandling();

// Cancel Token

function cancelToken() {
  const source = axios.CancelToken.source();
  axios
    .get("https://jsonplaceholder.typicode.com/todoss", {
      cancelToken: source.token,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log(`Request canceled`, thrown.message);
      }
    });

  if (true) {
    source.cancel("Request canceled");
  }
}

//cancelToken();

// AXIOS Instances

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

axiosInstance.get("/comments").then((res) => {
  console.log(res.data);
});
