import React from 'react';
import { TodoContext } from '../TodoContext/index';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  
  const toDoCount = <h1 className="TodoCounter">
    Has completado <span>{ completedTodos }</span> de <span>{ totalTodos }</span>!
  </h1>

  const allDone = <h1 className="TodoCounter">
    Has completado todos tus <span>ToDo's</span>!
  </h1>

  const noneCreated = <h1 className="TodoCounter">
    No has comenzado ninguna ToDo
  </h1>

  if (totalTodos === 0 && completedTodos === 0) {
    return(noneCreated);
  } else if (totalTodos === completedTodos) {
    return(allDone);
  } else {
    return(toDoCount);
  }
}

export { TodoCounter };