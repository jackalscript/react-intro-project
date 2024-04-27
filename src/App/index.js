import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   {text: 'Terminar curso de React.js', completed: false},
//   {text: 'Ver Kill Bill Vol. 1', completed: false},
//   {text: 'Taskete Kudasai', completed: false},
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Comer chimichanga', completed: false},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1', defaultTodos)

function App() {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
    
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      finishTodo={finishTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;
