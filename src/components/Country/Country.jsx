import React, { useState } from 'react';
import './Country.css';

const Country = ({ country }) => {

  let [visited, setVisited] = useState(false);

  const handleVisited = () => {
    if ( visited){
      setVisited(false);
    } else {
      setVisited(true);
    }

  }
  return (
    <div className='country'>
        <img src={country.flags.flags.png} alt="" />
      <h2>Name: {country.name.common}</h2>
      <h2>Area: {country.area.area} SQ km</h2>
      <h2>Population: {country.population.population} M</h2>
      <button onClick={handleVisited}>
        {visited ? 'Visited' : 'Mark as Visited'}
      </button>
    </div>
  );
};

export default Country;