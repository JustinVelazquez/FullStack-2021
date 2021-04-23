import React from 'react'
import Person from './Person/Person'

const Persons = ({persons, filtered, handleDeletePerson, props }) => {

    
  
    let filteredResult = persons.filter((person) =>
    person.name.toUpperCase().includes(filtered.toUpperCase())

  );
    return (
       <ul>
        {filteredResult.map(person => (
          <Person id={person.id} name={person.name} number={person.number} deletePerson={handleDeletePerson(person.name, person.id)} />
        ))}
        </ul>
    )
  //   return(
  //     <div>hello</div>
  //   )
}

export default Persons
