import React from 'react';
import '../styles/TodoSearch.css'

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');

  console.log('Los usuarios buscan toDos de ' + searchValue);

  return(
    <input
      placeholder="ToDo's"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };