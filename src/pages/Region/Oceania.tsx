import Header from '../../Header/Header'
import { useState ,useEffect} from "react"
import axios from 'axios'
import { CountryTypes } from '../../types/common'
import { useNavigate } from 'react-router-dom'
import Search from "..//../Search/Search"
import FilterRegion from "../../FilterRegion/FilterRegion"
import Button from '../../Button/Button'

const Oceania = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate();
  
  const [search, setSearch] = useState("")
  const [confirmed, setConfirmed] = useState<boolean>(false)
  
  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
      }
      catch (error) {
        console.error("Error  countries:");
      }
    };
    getCountries()
  },[])
   const countryDetalHandleClick = (country:CountryTypes) => {
      return navigate("/country-Details", {
       state: country,
    })
  }
  const [darkMode, setDarkMode] = useState(false)
  
    const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  const filteredData = data.filter((country:CountryTypes) => {
    return search === "" || country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
    <div className={darkMode ? "dark-mode" : "light-mode"}> 
        <Header onClick={toggleDarkMode} />
        <div >
          <div className='findediv'>
          <Search setSearch={setSearch} />
            <Button
              onClick={setConfirmed}
              width={200}
              height={56}
              border={"none"}
            >
              Filter by Region   ^
              </Button>
          </div>
            {confirmed &&< FilterRegion   setConfirmed={confirmed}/>}
          <div className='section'>
            {filteredData
            .filter((country:CountryTypes) => country.region === "Oceania")
            .map((country: CountryTypes, index) => (
          <div className='mainbox' key={index} onClick={() => countryDetalHandleClick(country)}>
              <img className='img' src={country.flags.png} alt={country.name.common} onClick={() => countryDetalHandleClick(country)} />
              <h1>{country.name.common}</h1>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
          </div>
           ))}
       </div>
      </div>
    </div>
   </>

  )
}

export default Oceania