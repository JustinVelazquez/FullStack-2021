import React, { useState } from 'react';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345',id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122',id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('')
  const [filtered, setFiltered] = useState([])

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value)
  
  }
  const handleFilter = e => {
    setFiltered(e.target.value)
    console.log(filtered)
  }

  const addName = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  
    const nameObject = {
      name: newName,
      number: number,
      id: persons.length + 1,
    };
    persons.find(n => n.name === newName) ? alert(`${newName} already exists. Please try another`) : setPersons(persons.concat(nameObject))
    setNewName('');


  };
  
  const filterResults = (e) => {
    
    
    console.log(filteredResult)

  
  }
  

  let filteredResult = persons.filter(person => person.name.toLowerCase() === 'Dan Abramov'.toLowerCase())
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filtered} onChange={handleFilter}/>
        <button type="submit">Filter</button>
      </div>

      <h2>Add a new person!</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={number} onChange={handleNumberChange} />
          <button type="submit">add</button>
        </div>
      </form>
      <form>
      </form>
      <h2>Numbers</h2>
      {filtered !== '' ? persons.map((person) => (
          <li key={person.id}>{person.name} {person.number}</li>
        )) : filteredResult.map((person) => (
          <li key={person.id}>{person.name} {person.number}</li>
        ))}<ul>
        {}
      </ul>
    </div>
  );
};

export default App;
