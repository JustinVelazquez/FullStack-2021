import React, { useState } from 'react';
import Country from './Country/Country';
import FullCountry from './Country/FullCountry/FullCountry';

const CountriesList = ({ countries, filter }) => {
  const [showCountry, setShowCountry] = useState();

  const countriesFilterList = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (countriesFilterList.length > 10) {
    return <p>Too many matches, please narrow your search</p>;
  }

  //   if(countriesFilterList.length === 1) {
  //     let showCountry = countriesFilterList[0]

  const show = (event) => {
      console.log(event.target.value)
    const cont = countries.filter((country) =>
      country.name.includes(event.target.value)
    );
    setShowCountry(cont[0]);
    console.log(showCountry)
  };

  if (showCountry !== undefined) {
    return (
      <FullCountry
        population={showCountry.population}
        name={showCountry.name}
        languages={showCountry.languages}
        flag={showCountry.flag}
        capital={showCountry.capital}
      />
    );
  }

  if(countriesFilterList.length > 1){
      return(
          <ul>
              {countriesFilterList.map(country => (
                  <Country
                  key={country.name}
                  name={country.name}
                  capital={country.capital}
                  onClick={show}
                  country={country}
                />
              ))}
          </ul>
      )
  } 

  return (
    <>
      <div>
        {/* <ul>
          {!countriesFilterList
            ? countries.map((country) => (
                <Country
                  //   id={country.name}
                  name={country.name}
                  capital={country.capital}
                />
              ))
            : countriesFilterList.map((country) => (
                <Country
                  //   id={country.name}
                  name={country.name}
                  capital={country.capital}
                  onClick={show}
                  country={country}
                />
              ))}
        </ul> */}
        <ul>
            {countriesFilterList.map(country => (
                <FullCountry
                population={showCountry.population}
                name={showCountry.name}
                languages={showCountry.languages}
                flag={showCountry.flag}
                capital={showCountry.capital}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default CountriesList;
