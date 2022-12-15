import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {

  window.onscroll=function(){
    if(document.body.scrollTop || document.documentElement.scrollTop >=50){
      document.getElementById("No_Auth").classList.add("active")
    }
    else{
      document.getElementById("No_Auth").classList.remove("active")
    }
  }

  return (
    <div>
      <header>

        <div className="main_no_Auth_Header">

          <nav className="navbar nav___bar navbar-expand-lg " id='No_Auth'>
            <div className="container">
              <NavLink className="navbar-brand" to="/">Material_Design</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="first">Link</NavLink>
                  </li>
                 
                  <li className="nav-item">
                    <NavLink className="nav-link " to="second">link</NavLink>
                  </li>
                </ul>
                
              </div>
            </div>
          </nav>

        </div>

      </header>
    </div>
  )
}

export default Header;
