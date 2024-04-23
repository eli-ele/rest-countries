import { Link } from 'react-router-dom';
import './FilterRegion.css'

const FilterRegion = ({setConfirmed}:any) => {
    return (
      
     <div className='region'  onClick={() => setConfirmed}>
            <p> <Link to="/Africa">Africa </Link> </p> 
            <p> <Link to="/America">America </Link> </p> 
            <p> <Link to="/Asia">Asia </Link> </p> 
            <p> <Link to="/Europe">Europe </Link> </p> 
            <p> <Link to="/Oceania">Oceania </Link> </p> 
    </div>
  )
}

export default FilterRegion