import React from "react"
import {useState} from "react"

function ThemeParkCards({park, theReviews,patchPark}){
    const [onClick, setOnclick] = useState(false)
    const [review,setReview]=useState('')

     function handleClick(){
        setOnclick(!onClick)
    }
    function postReview(){
    
       const newReview= [...park.review,review]
       fetch(`http://localhost:3000/theme-Parks/${park.id}`,{
        method:"PATCH",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({review:newReview})
       })
       .then(r=>r.json())
       .then(data=>patchPark(data))

    }
   
    
 
  return(
    <div id="card-container">
        <h1 id ="name">{park.name}</h1>
        <img src={park.image} alt={park.name} className="park_image" />
        <button id="button-review"onClick={handleClick}>See Reviews</button>
       {onClick ? <li id="reviews" >{park.review}</li> :null}
      <h3>Location: {park.state}</h3>
      {<input type="text"
        id="Add a review"
        placeholder="Add a review"
        onChange={e=>setReview(e.target.value)}
        value={review}>
         </input>}
         <button onClick={postReview}>Submit Review</button>
   </div>
    
    )
}
export default ThemeParkCards