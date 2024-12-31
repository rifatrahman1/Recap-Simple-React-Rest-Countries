import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => set_countries(data))
    }, []);

    const [countries, set_countries] = useState([]);
    const [visit_countries, set_visit_countries] = useState([]);
    const [flags, set_flags] = useState([]);
    
    const add_flags = (flag) => {
        console.log('visited flags...')
        const visit_flags = [...flags, flag];
        set_flags(visit_flags);
    }
    const handle_visit_country = (country) => {
        console.log('add to visited countries...')
        const countries_visited = [...visit_countries, country];
        set_visit_countries(countries_visited);
    }
    return (
        <div>
            <h1>Hello React World</h1>
            <br />
            <h3>Visisted Countries: {visit_countries.length}</h3>
            <ul>
                {
                    visit_countries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            <div className="flags_container">
                {
                    flags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            <div className="countries">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handle_visit_country={handle_visit_country} add_flags={add_flags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;