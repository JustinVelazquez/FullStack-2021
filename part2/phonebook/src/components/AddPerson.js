import React from 'react'

const AddPerson = ({addName, newName, handleNameChange, handleNumberChange, number}) => {
    return (
        <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={number} onChange={handleNumberChange} />
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default AddPerson
