import React, { useState, useEffect } from 'react';
import AddPerson from './components/AddPerson';
import Persons from './components/Persons/Persons';
import Filter from './components/Filter';
import Notification from './components/Notifcation';
import './app.css'

import personsService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [filtered, setFiltered] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

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
    let foundPerson = persons.find((n) => n.name === newName);
   

    if (foundPerson) {
      console.log(foundPerson);
      if (
        window.confirm(
          `${newName} is already in the phonebook. Replace the old number with a new one?`
        )
      ) {
        personsService
          .updatePerson(foundPerson.id, { ...foundPerson, number })
          .then((updatedPerson) => {
            console.log(`updated person props`,updatedPerson)
            setPersons(
              persons.map((person) => (person.name ? updatedPerson : person))
            );
            console.group(persons)
          })
          .catch((err) => {
            console.log(err);
            setErrorMessage('This is an error');
          });
        setPersons(persons.concat(nameObject));
        console.log(nameObject, persons)
        setErrorMessage(`Changed ${nameObject} number`);
        setNewName('');
        setNumber('');
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    } else {
      personsService
        .create(nameObject)
        .then((newPerson) => {
          setPersons(persons.concat(nameObject));
          setErrorMessage(`Added ${nameObject.name}`);
          setNewName('');
          setNumber('');
        })
        .catch((error) => {
          setErrorMessage(`${error.response.data.error}`);
          console.log(error);
        });
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const handleDeletePerson = (name, id) => {
    return () => {
      if (window.confirm(`Delete ${name}?`)) {
        personsService
          .deletePerson(id)
          .then(() => {
            setPersons(persons.filter((n) => n.id !== id));
            setErrorMessage(`Deleted ${name}`);
            setNewName('');
            setNumber('');
          })
          .catch((err) => {
            setPersons(persons.filter((n) => n.name !== name));
            setErrorMessage(`User ${name} has already been deleted`);
          });
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    };
  };

  useEffect(() => {
    personsService.getAll().then((names) => {
      setPersons(names);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
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
      <Persons
        persons={persons}
        filtered={filtered}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
