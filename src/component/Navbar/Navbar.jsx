import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    const [menuOpen, setMenuOpen]= useState(false);

    const handlemenu = () => setMenuOpen(!menuOpen);
  
  return (
    <div className='container text-blue-900 oswald-uniquifier'>

      <div className=' flex flex-row justify-between second-color  py-4 rounded-full my-4 mx-1 sticky
      shadow-[6px_3px_17px_1px_#718096]'>


        <div className='mx-4'>
          {/* <button>
          <svg>

          </svg>
          </button> */}
          <Link
            to="/login">
            Login
          </Link>
          |
          <Link to="/register">
            Register
          </Link>
        </div>
        <div className='flex flex-row items-center'>
          <input type="search"
           name="search" 
           id="searchbar"
           placeholder='Search' 
           className='pd-3 flex w-full text-center'/>
          <img src="search.svg" alt="" className='size-6 -mx-6 mr-0 cursor-pointer' />
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
          onClick={handlemenu}
          >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
              />
          </svg>
        </button>

        <div  className={`w-full md:inline-flex md:w-auto ${menuOpen ? '' : 'hidden'}  `}
          id="navbar-default">
          <ul className='p-4 md:p-0 md:flex-row md:space-x-8  md:border-0 flex flex-col'>
            <li className='block'>
              <NavLink
            to="/">
            Home
          </NavLink>
            </li>
            <li className='block'>
              <NavLink
            to="manager">
            Codes
          </NavLink>
            </li>
          </ul>          
        </div>
      </div>
    </div>

)
}

export default Navbar
