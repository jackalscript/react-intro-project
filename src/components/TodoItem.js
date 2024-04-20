import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
import '../styles/TodoItem.css';


function TodoItem(props) {
  return (
    <li className="TodoItem">
    <CompleteIcon
      completed={props.completed}
      onCompletion={props.onCompletion}
    />

      {/* <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onCompletion}
      >
        V
      </span> */}
      <p
        className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
      >
        {props.text}
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
      {/* <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span> */}
    </li>
  );
}
export { TodoItem };