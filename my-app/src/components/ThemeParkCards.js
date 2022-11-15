import React from "react"
function ThemeParkCards({park}){







    return(
    <li className="park_pic">
        <h1>{park.name}</h1>
        <img src={park.image} alt={park.name} className="park_image" />
        <h2>{park.state}</h2>
        
           <p>
            {park.review}
            </p> 
        
   </li>
    
    )
}
export default ThemeParkCards