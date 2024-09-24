export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searFilterChange = (text) => {
  return {
    type: "filter/searchFilterChange",
    payload: text,
  };
};
