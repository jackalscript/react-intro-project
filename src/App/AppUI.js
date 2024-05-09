import React from "react";
import { TodoCounter } from '../components/TodoCounter/index';
import { TodoSearch } from '../components/TodoSearch/index';
import { TodoList } from '../components/TodoList/index';
import { TodoItem } from '../components/TodoItem/index';
import { CreateTodoBtn } from '../components/CreateTodoButton/index';
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError"
import { EmptyTodos } from "../components/EmptyTodos"

function AppUI ({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  finishTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
  
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && (
          <React.Fragment>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </React.Fragment>
        )}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos/ >}

        {searchedTodos.map(todo => (
          <TodoItem
            key = { todo.text }
            text = { todo.text }
            completed = { todo.completed }
            onCompletion = { () => finishTodo(todo.text) }
            onDelete = { () => deleteTodo() }
          />
        ))}
      </TodoList>
  
      <CreateTodoBtn />
    </React.Fragment>
  );
}

export { AppUI };