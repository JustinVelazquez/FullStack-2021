import React from 'react'

const CountriesFilter = ({filter, handleFilterChange}) => {
    return (
        <div>
          find countries: <input value={filter} onChange={handleFilterChange} />
        </div>
    )
}

export default CountriesFilter
