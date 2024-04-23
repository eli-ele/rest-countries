import search from "..//assets/search.svg"
const Search = ({setSearch}:any) => {
    return (
      <>
        <div className="searchdiv">
           <img className="searchicon" src={search} />
            <input className="search" type="text"
                placeholder="Search for a country…"
                onChange={(e) => setSearch(e.target.value)}
              />
         </div>  
      </>
  )
}

export default Search