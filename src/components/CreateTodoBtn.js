import React from 'react';
import '../styles/CreateTodoBtn.css'

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