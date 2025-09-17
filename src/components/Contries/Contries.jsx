import React, { useEffect, useState } from 'react';
import './contries.css'
import Country from '../Country/Country';
const Contries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,languages,borders,timezones,flags')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div className='countryAll'>
            <h3>All Countries: <span className='countryall'>{countries.length}</span> </h3>
            <div className='country-container'>
                {
                    countries.map(country => <Country country={country} key={country.area}></Country>)
                }
            </div>
        </div>
    );
};

export default Contries;