import React from 'react';
import './CreateTodoBtn.css'

function CreateTodoBtn({setOpenModal}) {
  return(
    <button
      className="CreateTodoButton"
      onClick={
        (event) => {
          setOpenModal(state => !state);
        }
      }
    >+</button>
  );
}

export { CreateTodoBtn };