import { Link,useLocation} from "react-router-dom"
import './CountryDetails.css'
import Header from "../Header/Header";
import { useState } from "react";

const CountryDetails = () => {

    const location = useLocation();
    console.log(location.state);
    const data = location.state;

const [darkMode, setDarkMode] = useState(false)

const toggleDarkMode = () => {
  setDarkMode(!darkMode)
}
  return (
    
    <div className={darkMode ? "dark-mode" : "light-mode"} >
      <Header  onClick={toggleDarkMode}/>
        <button className="back"><Link to="/country">  ← go back</Link> </button>
          <div>
              {location.state && (
                  <>
                      <div className="detailsdiv">
                        <div className="detailsbox">
                           <div className="flagdiv">
                              <img className="flag" src={location.state.flags.png} alt={location.state.common} />
                           </div>
                           <div className="details">
                                  <div className="countrydiv">
                                      <div className="box1">
                                      <h1>{location.state.name.common}</h1>
                                      <p>Native Name:{location.state.name.common ||(location.state.altSpellings && location.state.altSpellings[1])}</p>
                                      <p>population:{location.state.population}</p>
                                      <p>region:{location.state.region}</p>
                                      <p>Sub Region:{location.state.subregion} </p>
                                      <p>Capital: {location.state.capital}</p>
                                    </div>  
                                   <div className="box2">  
                                      <p>Top Level Domain: {location.state.tld}</p>
                                      <p>Currencies:  {Object.values(data.currencies)
                                      .map((currency) => (currency as { name: string }).name)
                                      }</p>
                                      <p>Langvages: {Object.values(data.languages).join(" ")}</p>
                                   </div>    
                               </div>
                               <div className="borders">
                                     <p>Border Countries: {location.state.borders?.[0]}  {location.state.borders?.[1]} {location.state.borders?.[2]}</p>
                               </div>
                            </div>
                        </div>
                      </div>
                  </>
              )}
        </div>
    </div>
  )
}

export default CountryDetails




