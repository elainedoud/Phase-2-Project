import React from "react"
import '../App.css';
import Header from "./Header"
import ThemeParkPage from "./ThemeParkPage"

import { useEffect,useState} from 'react';


function App() {
  const [parks,setParks]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/theme-Parks")
    .then(r=>r.json())
    .then(parks=>setParks(parks))

  },[])
  function patchPark(newPark){
    const newParks=parks.map(park=>{
      if(park.id===newPark.id){return newPark}
      else {return park}
    })
    setParks(newParks)
  }


  return (
    <div id="background" >
      
      <header>
        <Header />
        <div>
        <ThemeParkPage parks={parks} setParks={setParks} patchPark={patchPark}/>
        </div>
      </header>
    </div>
  );
}

export default App;
