import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoBtn } from '../components/CreateTodoButton';
import { TodoForm } from "../components/TodoForm";
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoContext } from '../components/TodoContext';
import { Modal } from '../components/Modal';

function AppUI () {
  const {
      loading,
      error,
      searchedTodos,
      finishTodo,
      deleteTodo,
      openModal,
      setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
  
      <TodoCounter />
      <TodoSearch />

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
        
      <CreateTodoBtn setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

    </React.Fragment>
  );
}

export { AppUI };