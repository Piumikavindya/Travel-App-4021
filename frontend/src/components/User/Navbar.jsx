import React from "react";
import {BsFillSunFill} from 'react-icons/bs'
import Container from "../Container";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks";
import "../../styles/Navbar.css";

export default function Navbar({isAuthenticated,handleSignOut}) {
const {toggleTheme}= useTheme();

  return ( 
    <div className="bg-white  shadow-sm shadow-gray-500">
      <Container className=" text-black p-2"  >
        <div className=" flex navbar-logo justify-between items-center">
          <Link to='/'>
           <img src="/logo.png"  alt="" className="h-12 w-20 "/>
          </Link>
       
       <ul className="flex items-center space-x-6">
        <li>
          <button onClick ={toggleTheme} className="bg-dark-subtle p-1 rounded">
        <BsFillSunFill className="text-secondary " size={24}/>
        </button>
        </li>

        <li>
          <input type="text" className="border-2 Navtext border-r-10 border-dark-subtle p-1 rounded bg-transparent text-xl outline-none focus:border-white transition text-white" placeholder="search..." />
        </li>

        <li>
 <Link className="text-red-400 Navtext font-semibold text-lg" to='/'>
Home
 </Link>
</li>

<li>
  {isAuthenticated ? (
    <button
      onClick={handleSignOut}
      className="text-red-400 Navtext font-semibold text-lg"
    >
      Sign Out
    </button>
  ) : (
    <Link
      className="text-red-400 Navtext font-semibold text-lg"
      to="/auth/signin"
    >
      Sign In
    </Link>
  )}
</li>



       </ul>
        </div>
       
      </Container>
    </div>
  )
}