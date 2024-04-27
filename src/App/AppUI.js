import React from "react";
import { TodoCounter } from '../components/TodoCounter/index';
import { TodoSearch } from '../components/TodoSearch/index';
import { TodoList } from '../components/TodoList/index';
import { TodoItem } from '../components/TodoItem/index';
import { CreateTodoBtn } from '../components/CreateTodoButton/index';

function AppUI ({
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