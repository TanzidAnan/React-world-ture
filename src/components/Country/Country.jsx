import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountry}) => {
    console.log(country)

    const {name,flags,population,area} =country;
    const [visited,setVisited] =useState(false)

    const handleVisited =() =>{
        setVisited(!visited)
    }
    const passWithParms =() =>{
        handleVisitedCountry(country)
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name {name?.common}</h3>
            <img  src={flags.png} alt="" />
            <h5>area: {area}</h5>
            <p>population: {population}</p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={handleVisited}>{visited? 'Visited':'Going'}</button>
            {visited ?'I have visited this country':'I want to visited'}
        </div>
    );
};

export default Country;