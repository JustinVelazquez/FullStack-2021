import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountriesFilter from './components/CountriesFilter';
import CountriesList from './components/CountriesList/CountriesList';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  

  const api = 'https://restcountries.eu/rest/v2/all';

  useEffect(() => {
    axios.get(api).then((res) => {
      const list = res.data;
       setCountries(list);
    });
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  
 const handleClick = (e) => {
    e.preventDefault();
    
 }

 

  return (
    <>
      <h1>HelloWorldfeaf!</h1>
      <CountriesFilter handleFilterChange={handleFilterChange} value={filter} />
      <CountriesList countries={countries} filter={filter} />
    </>
  );
};

export default App;
