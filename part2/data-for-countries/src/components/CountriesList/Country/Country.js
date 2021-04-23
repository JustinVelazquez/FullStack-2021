import React, { useState } from 'react'
import FullCountry from './FullCountry/FullCountry'

const Country = ({name, show, country}) => {
   
    return (
        <div>
        <li key={name}>
            {name}
        </li> 
        <button value={country.name} onClick={show}>Show</button>
        </div>
    )
}

export default Country
