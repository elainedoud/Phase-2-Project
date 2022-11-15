import React from "react"
function ThemeParkCards({park}){




    return(
    <div>
        <h1>{park.name}</h1>
        <img src={park.image} alt={park.name} className="park_image" />
        <h2>{park.state}</h2>
           <p>
            Placeholder for review
            </p> 
   </div>
    
    )
}
export default ThemeParkCards