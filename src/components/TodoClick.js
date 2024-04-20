import React from "react";

function TodoClick() {
  let [state, setState] = React.useState(0);

  return(
    <>
      <p>
        Diste click
        {state} veces
      </p>
      <button
        onClick={() => {
          setState(state++)
        }}
      ></button>
    </>
  );
}

export { TodoClick };