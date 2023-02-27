import React from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery';

const Header = () => {

  window.onscroll=function(){
   
    if(document.body.scrollTop || document.documentElement.scrollTop >=50){
      document.getElementById("No_Auth").classList.add("toP_active")
    }
    else{
      document.getElementById("No_Auth").classList.remove("toP_active")
    }
if(document.body.scrollTop || document.documentElement.scrollTop >=150){
  document.getElementById("No_Auth").classList.add("active")
  document.getElementById("No_Auth").classList.remove("toP_active")
}
else{
  document.getElementById("No_Auth").classList.remove("active")

}

  }
 {
  $("a.drop_down").on("click" ,function(){
 this.style.backgroundColor("red")
  })
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
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0" id='top_header_menues'>
                  <li className="nav-item">
                    <NavLink className="nav-link drop_down"  to="/">Home</NavLink>
                    <div className="drop_menu_down">
                      <ul>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="first">our material</NavLink>
                    <div className="drop_menu_down">
                      <ul>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                      </ul>
                    </div>
                  </li>
                 
                  <li className="nav-item">
                    <NavLink className="nav-link " to="second">our services</NavLink>
                    <div className="drop_menu_down">
                      <ul>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                      </ul>
                    </div>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">for sale</NavLink>
                    <div className="drop_menu_down">
                      <ul>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="hireme">hire me</NavLink>
                    <div className="drop_menu_down">
                      <ul>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                      </ul>
                    </div>
                  </li>
                 
                  <li className="nav-item">
                    <NavLink className="nav-link " to="hirestaff">hire staff</NavLink>
                    <div className="drop_menu_down">
                      <ul>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">my shop</NavLink>
                    <div className="drop_menu_down">
                      <ul>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="first">top trending</NavLink>
                    <div className="drop_menu_down">
                      <ul>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                      </ul>
                    </div>
                  </li>
                 
                  <li className="nav-item">
                    <NavLink className="nav-link " to="second">special offer</NavLink>
                    <div className="drop_menu_down">
                      <ul>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                      </ul>
                    </div>
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
