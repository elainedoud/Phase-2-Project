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


  return (
    <div id="background" >
      
      <header>
        <Header />
        <div>
        <ThemeParkPage parks={parks} setParks={setParks} />
        </div>
      </header>
    </div>
  );
}

export default App;
