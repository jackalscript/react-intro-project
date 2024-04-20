import '../styles/TodoCounter.css';

function TodoCounter({ total, completed }) {
  const toDoCount = <h1 className="TodoCounter">
    Has completado <span>{ completed }</span> de <span>{ total }</span>!
  </h1>

  const allDone = <h1 className="TodoCounter">
    Has completado todos tus <span>ToDo's</span>!
  </h1>

  const noneCreated = <h1 className="TodoCounter">
    No has comenzado ninguna ToDo
  </h1>

  if (total === 0 && completed === 0) {
    return(noneCreated);
  } else if (total === completed) {
    return(allDone);
  } else {
    return(toDoCount);
  }
}

export { TodoCounter };