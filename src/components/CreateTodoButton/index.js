import React from 'react';
import './CreateTodoBtn.css'

function CreateTodoBtn() {
  return(
    <button
      className="CreateTodoButton"
      onClick={
        (event) => {
          console.log('le diste click')
          console.log(event)
          console.log(event.target)
        }
      }
    >+</button>
  );
}

export { CreateTodoBtn };