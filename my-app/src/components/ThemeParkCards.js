import React from "react"
import {useState} from "react"

function ThemeParkCards({park, theReviews}){

    const [onClick, setOnclick] = useState(false)

    function handleClick(){
        setOnclick(!onClick)
    }


    return(
    <div>
        <h1>{park.name}</h1>
        {onClick ? <p onClick={handleClick}>{park.review}</p> : <img src={park.image} alt={park.name} className="park_image" onClick={handleClick} />}
        <h2>{park.state}</h2>
   </div>
    
    )
}
export default ThemeParkCards