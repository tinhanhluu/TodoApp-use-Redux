import { createSelector } from "reselect";

export const filterSearchSelector = (state) => state.filter.search;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterSearchSelector,
  (todoList, filterSearch) => {
    return todoList.filter((todo) => {
      return todo.name.includes(filterSearch);
    });
  }
);
