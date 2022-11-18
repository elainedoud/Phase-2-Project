import React from "react"
import {useState} from "react"

function ThemeParkCards({park, theReviews}){
    const [onClick, setOnclick] = useState(false)
    const [review,setReview]=useState([''])
     function handleClick(){
        setOnclick(!onClick)
    }
    function reviewArry(e,addReview){
       setReview(e.target.value)
       const newReview=[...park.reviews,addReview]
       setReview(newReview)
    }
   
    console.log(review)
 
  return(
    <div id="card-container">
        <h1 id ="name">{park.name}</h1>
        <img src={park.image} alt={park.name} className="park_image" />
        <button id="button-review"onClick={handleClick}>See Reviews</button>
       {onClick ? <li id="reviews" >{park.review}</li> :null}
      <h3>Location: {park.state}</h3>
      <input type="text"
        id="Add a review"
        placeholder="Add a review"
        onChange={reviewArry}
        value={review}>

        </input>
   </div>
    
    )
}
export default ThemeParkCards