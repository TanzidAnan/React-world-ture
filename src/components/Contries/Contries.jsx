import React, { useEffect, useState } from 'react';
import './contries.css'
import Country from '../Country/Country';
const Contries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry,setVisitedCountry] =useState([])
    const [visitedFlage,setVisitedFlage] =useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,languages,borders,timezones,flags')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry =(country) =>{
        const newVisitedCountry =[...visitedCountry,country];
        setVisitedCountry(newVisitedCountry)
    }
    const handleVisitedFlage =(flage) =>{
        console.log(flage)
        const newVisitedFlags =[...visitedFlage,flage]
        setVisitedFlage(newVisitedFlags)
    }
    return (
        <div className='countryAll'>
            <h3>All Countries: <span className='countryall'>{countries.length}</span> </h3>
            <div>
                <h5>visited country :{visitedCountry.length}</h5>
                <ul>
                    {
                        visitedCountry.map(country =><li>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className='flag-container'>
                    {
                        visitedFlage.map(flags =><img src={flags}></img>)
                    }
            </div>
            <div className='country-container'>
                {
                    countries.map(country => <Country country={country}
                         key={country.area}
                         handleVisitedCountry={handleVisitedCountry}
                         handleVisitedFlage={handleVisitedFlage}
                         ></Country>)
                }
            </div>
        </div>
    );
};

export default Contries;