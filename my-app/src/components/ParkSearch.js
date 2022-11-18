import React from "react"

function ParkSearch({search, setSearch}){
return(
    <div id="searchDiv">
        <input 
        type="text"
        id="searchBar"
        placeholder="Search for a Park"
        onChange={e => setSearch(e.target.value)}
        value={search}
        >
        </input>
    </div>
)
}
export default ParkSearch