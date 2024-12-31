import { useState } from 'react';
import './Country.css'
const Country = ({country, handle_visit_country, add_flags}) => {
    // console.log(country);
    const {name, flags, population, area, region} = country;

    const [visited, set_visited] = useState(false);
    const handle_visited = () => {
        set_visited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2>{name.common}</h2>
            <br />
            <img src={flags.png} alt="" />
            <br />
            <h4>Population: {population}</h4>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <br />
            <button onClick={() => {handle_visit_country(country)}}>Visit</button>
            <br />
            <br />
            <button onClick={() => {add_flags(country.flags.png)}}>Add Flag</button>
            <br />
            <br />
            <button onClick={handle_visited} disabled={visited}>{visited ? 'Visited' : 'Going Visited'}</button>
            {
                visited && '  i visited this country...'
            }
        </div>
    );
};

export default Country;