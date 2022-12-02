import React, { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeEvent = ({ target }) => {
    setInputValue(target.value);

    //  console.log(inputValue)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        type="text"
        placeholder="Buscar Gifs..."
        onChange={handleChangeEvent}
      >

      </input>
    </form>
  );
};

export default AddCategory;
