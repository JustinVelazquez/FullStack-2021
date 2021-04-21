import React from 'react'
import Person from './Person/Person'

const Persons = ({persons, filtered, }) => {


    let filteredResult = persons.filter((person) =>
    person.name.toLowerCase().includes(filtered.toLowerCase())

  );
    return (
        
        <ul>
        {!filteredResult
          ? persons.map((person) => (
             <Person id={person.id} name={person.name} number={person.number} />
            ))
          : filteredResult.map((person) => (
            <Person id={person.id} name={person.name} number={person.number} />
            ))}
        </ul>
    )
}

export default Persons
