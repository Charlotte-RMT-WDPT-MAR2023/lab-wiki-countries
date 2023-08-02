import { useParams, Link , Navigate } from "react-router-dom"; 
import { useState, useEffect } from "react";
import axios from "axios";

function CountryDetails(props){
    const { countryCode } = useParams();
    const { countryList } = props;
    const [foundCountry, setFoundCountry] = useState(countryList[0]);
    
    useEffect(()=> {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
        .then(response => {if(response){setFoundCountry(response.data)}})
        .catch(err => <Navigate to="/error" />)
    }, [countryCode])


    return (
    
        <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} width={150} alt='country'/>
           
            <h1>{foundCountry.name.common}</h1> 
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: '30%'}}>Capital</td>
                        <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {foundCountry.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>{foundCountry.borders.length !== 0 ? "Borders":"No Adjacent Countries"}</td>
                    <td>
                        <ul>
                        {foundCountry.borders.map(border => {
                            const countryInBorder = countryList.filter(country =>{
                                return country.alpha3Code === border
                            })
                            return <li key={countryInBorder[0].alpha3Code}><Link to={`/countries/${countryInBorder[0].alpha3Code}`}>{countryInBorder[0].name.common}</Link></li>
                        })}
                        </ul>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails;