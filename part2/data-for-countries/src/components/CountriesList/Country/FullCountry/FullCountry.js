import React from 'react';
import './fullcountry.css'


const FullCountry = ({name, capital, population, languages, flag }) => {
  return (
      <>
      <h1>{name}</h1>
      <p>Capital: </p> {capital}
      population: {population}
      <h2>Languages</h2>
      <ul>
          {languages.map(language => (
              <li key={language.name}>{language.name}</li>
          ))}
      </ul>
      <img alt={flag} src={flag}/>
    
    </> 
  );
};

export default FullCountry;
