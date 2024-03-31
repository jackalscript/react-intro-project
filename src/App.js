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
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={ todo.text }
            text={ todo.text }
            completed={ todo.completed }
          />
        ))}
      </TodoList>

      <CreateTodoBtn />
    </React.Fragment>
  );
}

export default App;
