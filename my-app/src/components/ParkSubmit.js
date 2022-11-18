import React from "react"
import {useState} from "react"

function ParkSubmit({viewNewPark}){

const [park, setPark] = useState("")
const [location, setLocation] = useState("")
const [image, setImage] = useState("")
const [review, setReview] = useState("")

function createPark(e){
  e.preventDefault()
  fetch('http://localhost:3000/theme-Parks',{
    method: 'POST',
    headers: {'Content-Type':'application/json',},
    body: JSON.stringify({
      name: park,
      state: location,
      image: image,
      review: review,
    })
  })
    .then(res => res.json())
    .then(parks => viewNewPark(parks))
}

    return(
    <div id="search-form">
      <form onSubmit={createPark}>
        <input className="search" type="text" name="name" placeholder="Amusement Park Name" value={park} onChange={(e) => setPark(e.target.value)} ></input>
        <input className="search" type="text" name="state" placeholder="State" value={location} onChange={(e)=> setLocation(e.target.value)}></input>
        <input className="search" type="text" name="image" placeholder="Image URL" value={image} onChange={(e)=> setImage(e.target.value)}></input>
        <input className="search"type="text" name="review" placeholder="Review" value={review} onChange={(e)=> setReview(e.target.value)}></input>
        <button id="submit-button"  type="submit">Add Amusement Park</button>
      </form>
    </div>
    )
}
export default ParkSubmit