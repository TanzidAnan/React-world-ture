import './Country.css'

const Country = ({country}) => {
    console.log(country)

    const {name,flags,population,area} =country

    return (
        <div className='country'>
            <h3>Name {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h5>area: {area}</h5>
            <p>population: {population}</p>
        </div>
    );
};

export default Country;