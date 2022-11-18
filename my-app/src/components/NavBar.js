import {Link} from "react-router-dom"
import React from "react"

function NavBar(){

 return (
    <div>
    <nav className="navBar">
    <div id="ThemeLink">
        <button className="NavButton">
          <Link className="" to="/">
            Home
          </Link>
        </button>
        </div>


      <div id="ThemeLink">
        <button className="NavButton">
          <Link className="" to="/About">
            About
          </Link>
        </button>
      </div>
      <div id="ThemeLink">
        <button className="AddParkButton">
          <Link className="" to="/Add an Amusement Park">
            Add Amusement Park
          </Link>
        </button>
      </div>
    </nav>
  </div>
    )
}

export default NavBar