import axios from "axios";

const baseurl = "http://localhost:3000";

const getALlTodo = (setTodo) => {
  axios.get(baseurl).then(({ data }) => {
    console.log("data---->", data);
    setTodo(data);
  });
};

const addTodo = (text, setText, setTodo) => {
  axios
    .post(`${baseurl}/create`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getALlTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const updateTodo = (todoId, text, setText, setTodo, setIsUpdating) => {
  axios
    .put(`${baseurl}/update`, { _id: todoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getALlTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const deleteTodo = (_id, setTodo) => {
  axios
    .delete(`${baseurl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getALlTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

export { getALlTodo, addTodo, updateTodo, deleteTodo };
