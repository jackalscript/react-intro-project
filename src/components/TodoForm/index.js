import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return(
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo ToDo</label>
      <textarea
        placeholder="Cortar cebolla para el almuerzo"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm--btnContainer">
        <button
          type="button"
          className="TodoForm--btn TodoForm--btn__cancel"
          onClick={onCancel}
        >Cancelar</button>
        <button
          type="submit"
          className="TodoForm--btn TodoForm--btn__add"
        >Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };