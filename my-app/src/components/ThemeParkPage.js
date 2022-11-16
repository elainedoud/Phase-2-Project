import React from "react"
import ThemeParkCards from "./ThemeParkCards"
import ParkSearch from "./ParkSearch"
import ParkSubmit from "./ParkSubmit"
import MyReviews from"./MyReviews"



function ThemeParkPage({parks, setParks}){
    const RenderParks=parks.map(park=>{
       return <ThemeParkCards park={park}key={park.id}/>
    })

    function viewNewPark(newPark){
        const newParkArray = [...parks, newPark]
        setParks(newParkArray)
      }

    return(
        <div>
        <ParkSearch />
        <ParkSubmit viewNewPark={viewNewPark}/>
        <MyReviews/>
        {RenderParks}
         </div>
    )
}


export default ThemeParkPage