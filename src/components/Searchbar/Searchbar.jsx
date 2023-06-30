import React, { useState } from 'react';

const Searchbar = ({ getName }) => {
  const [searchName, setSearchName] = useState('');

  const handleNameChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
      alert('Type smth then search');
      return;
    }
    getName(searchName);
    setSearchName('');
  };

  return (
    <div className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          name="searchName"
          value={searchName}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className="SearchForm-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
