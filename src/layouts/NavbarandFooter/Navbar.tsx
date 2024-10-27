import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import SearchBooksPage from '../SearchBooksPage/SearchBooksPage'

export default function Navbar() {
  return (
    <div>
        

       <nav className='navbar navbar-expand-lg  bg-primary text-light main-color py-3' data-bs-theme="dark">
      <div className='container-fluid'>
        <span className='navbar-brand border rounded p-2'>Cansu <br></br>Library</span>
        <button className='navbar-toggler' type='button'
          data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown' aria-expanded='false'
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className=' collapse navbar-collapse' id='navbarNavDropdown'>
     

          <ul className=' navbar-nav'>
           
            <li className='nav-item'>
              <NavLink className='nav-link  text-light' to='/home'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link  text-light' to='/search'>Search Books</NavLink>
             
            </li>
          
              <li className='nav-item'>
                <NavLink className='nav-link  text-light' to='/shelf'>Shelf</NavLink>
                
              </li>
            
         
              <li className='nav-item'>
                <NavLink className='nav-link  text-light' to='/admin'>Admin</NavLink>
              </li>
            
          </ul>
          {/* ms-auto means: margin start auto. öğeyi saga hizlar */}
          <ul className='navbar-nav ms-auto'>
          
              <li className='nav-item m-1 text-light'>
                <Link type='button' className='btn btn-outline-light' to='/login'>Sign in</Link>
              </li>
              
              {/* <li>
                <button className='btn btn-outline-light' >Logout</button>
              </li>
             */}
          </ul>
        </div>
      </div>
    </nav> 
  
    </div>

  )
}
