import React from 'react'


const Person = ({id, name, number, deletePerson}) => {
    return (
        <>
        <li key={id}>{name} {number} <button onClick={deletePerson}>Delete</button></li> 
        </>
    )
}

export default Person
