import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent:React.FC = () => {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary d-flex'>
        <Link className='navbar-brand' to='/'>
          Pokemon
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse bg-dark' id='navbarNavAltMarkup'>
          <div className='navbar navbar-expand-lg d-flex'>
            <Link className='nav-link text-white' to='/'>
              HomePage
            </Link>
            
          </div>
        </div>
      </nav>
    );
  };

  export default NavbarComponent;