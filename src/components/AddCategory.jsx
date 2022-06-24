import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const onInputChange = ({ target }) => { // event.target.value
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const input = inputValue.trim().toLocaleLowerCase();
    input.length < 1 ? null : onNewCategory(input);
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit } aria-label="form">
      <input
        type="text"
        placeholder="Search Gifs"
        value={ inputValue }
        onChange= { onInputChange } // (event) => onInputChange(event)
      />
    </form>
  )
}

AddCategory.protoTypes = {
  onNewCategory: PropTypes.func.isRequired,
}