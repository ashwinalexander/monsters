// import React from 'react';
import { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

const App = () => {
  //useState gives us the ability to encapsulate local state in a functional component
  //re-render only when state changes
  const [searchField, setSearchField] = useState(''); //value we want to store, setter function
  const [title, setTitle] = useState('place title');
  const [monsters, setMonsters] = useState([]); //value we want to store, setter function
  const [stringField, setStringField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //callback fn, dependencies (state or props)
  //run function whenever dependency value changes.
  //useEffect(() => {}, []);

  //get all the monsters but only once
  useEffect(() => {
    //this is a side-effect
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []); //we only want it to happen once so no need to add dependencies (empty array)

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const titleString = event.target.value.toLowerCase();
    setTitle(titleString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        className='search-box'
        placeholder='search monsters'
        handleChange={onSearchChange}
      />
      <br />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
