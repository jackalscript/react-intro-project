import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem';
import { CreateTodoBtn } from './components/CreateTodoBtn';

const defaultTodos = [
  {text: 'Terminar curso de React.js', completed: false},
  {text: 'Ver Kill Bill Vol. 1', completed: false},
  {text: 'Taskete Kudasai', completed: false},
  {text: 'Cortar cebolla', completed: true},
  {text: 'Comer chimichanga', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );

  const finishTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    
    let todoStatus = newTodos[todoIndex];
    if (todoStatus.completed) {
      todoStatus.completed = false;
    } else {
      todoStatus.completed = true;
    }
    
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

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

export default App;
