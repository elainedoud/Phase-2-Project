import React from "react"

function ParkSearch({search, setSearch}){
return(
    <div>
        <input 
        type="text"
        id="search"
        placeholder="Search for a Park"
        onChange={e => setSearch(e.target.value)}
        value={search}
        >
        </input>
    </div>
)
}
export default ParkSearch