import React from 'react'
import './navbar.css'
import Logo from '../static/logo.png'

function Navbar() {
    return (
      <React.Fragment>
        {/* <div className= "container-fluid">     */}
        <nav className='navbar navbar-expand-lg navbar-light  py-4 container'>
          <img src={Logo} class='img-fluid' alt='' />
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a className='nav-link text-dark' href='#'>
                  <b>Home</b> <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link mx-5' href='#'>
                  Our services
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Articles
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
}


export default Navbar