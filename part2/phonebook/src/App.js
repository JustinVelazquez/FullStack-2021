import React, { useState, useEffect } from 'react';
import AddPerson from './components/AddPerson';
import Persons from './components/Persons/Persons';
import Filter from './components/Filter';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 5 },
  ]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [filtered, setFiltered] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleFilter = (e) => {
    setFiltered(e.target.value);
    console.log(filtered);
  };

  const addName = (e) => {
    e.preventDefault();
    setNewName(e.target.value);

    const nameObject = {
      name: newName,
      number: number,
      id: persons.length + 1,
    };
    persons.find((n) => n.name === newName)
      ? alert(`${newName} already exists. Please try another`)
      : setPersons(persons.concat(nameObject));
    setNewName('');
    setNumber('');
  };

  // useEffect(() => {
  //   axios.get('http://localhost:3001/persons').then((res) => {
  //     const names = res.data;
  //     console.log(names);
  //   }, []);
  //   console.log('first')
  // });

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        const names = response.data
        setPersons(names)
      })
  }, [])



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filtered={filtered} handleFilter={handleFilter} />
      <h2>Add a new person!</h2>
      <AddPerson
        newName={newName}
        addName={addName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        number={number}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filtered={filtered} />
    </div>
  );
};

export default App;
