import React from 'react'
import { BsSearch } from "react-icons/bs";
const Main_selct_picker = () => {
  function filter_city() {

    let dropdown_input = document.getElementById("dropdown_input");
    dropdown_input.classList.toggle("show_drop_down");
    document.querySelector(".drop_down_menu").classList.toggle("open_menu");
    let drop_down_menu = document.getElementById("drop_down_menu");
    let child_get_val = drop_down_menu.getElementsByTagName("a");
    for (let j = 0; j < child_get_val.length; j++) {
      let Set_Atrib = child_get_val[j].getAttribute("data-value");
      child_get_val[j].innerText = Set_Atrib
    }
    for (let i = 0; i < child_get_val.length; i++) {
      child_get_val[i].addEventListener("click", function (e) {
        let Set_Atrib = child_get_val[i].getAttribute("data-value");

        document.getElementById("dropdown_input").value = Set_Atrib;

      })
    }
    document.getElementById("residental").classList.remove("active")
  };


  function Select_Area() {
if(document.getElementById("drop_down_menu").className ==="open_menu"){
  alert("working")
document.getElementById("drop_down_menu").classList.remove("open_menu")
document.getElementById("dropdown_input").classList.remove("show_drop_down")
}
    let dropdown_residental = document.getElementById("residental");
    dropdown_residental.classList.toggle("active")

  }
 window.addEventListener("load",function(){
  if(document.getElementById("My_UL_items")){
    let My_UL_items= document.getElementById("My_UL_items");
    let get_Childs=My_UL_items.getElementsByClassName("nav-link")
    for(let i=0;i<get_Childs.length;i++){
     get_Childs[i].addEventListener("click",function(e){
       if(document.querySelector(".nav-link.active") !== null){
         document.querySelector(".nav-link.active").classList.remove("active")
  
         e.target.classList.add("active")
       }
     })
    }
  }
 })
 

  return (
    <div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">

          <div className="slect_picker_main_lamd_00987">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" data-get="atrib_input" id='dropdown_input' value="Select City" onClick={filter_city} />
              <div className="drop_down_menu" id='drop_down_menu' disabled="true">
                <li>
                  <a data-value="lahore"></a>
                </li>
                <li>
                  <a data-value="peshawar"></a>
                </li>
                <li>
                  <a data-value="karachi"></a>
                </li>
                <li>
                  <a data-value="lahore"></a>
                </li>
                <li>
                  <a data-value="peshawar"></a>
                </li>
                <li>
                  <a data-value="karachi"></a>
                </li>
              </div>
              <div className="postion_relative">
                <button class="btn btn_outline_secondary" type="button" id="button-addon2" onClick={Select_Area}>

                  <div className="d-flex align_with_parent">
                    <div className="opacit_decreases_text_addon">
                      Property Type
                      <div className="">
                        All residentials
                      </div>
                    </div>
                    <div className="icon">
                      <i>
                        <BsSearch />
                      </i>
                    </div>
                  </div>

                </button>

                <div className="drop_down_of_residentials" id='residental'>
                  <div className="tabs_contents">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
                      </li>

                    </ul>
                    <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">home</div>
                      <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">profile</div>
                      <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">conatct</div>

                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>



      
      </div>
    
<div className="row postioning_row" >
<div className="col-sm-12 text-center">
<div className="main_top_tabpills_light_weight">
        
<ul class="nav nav-pills" id='My_UL_items'>
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="#">Active</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Link</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Link</a>
</li>


</ul>
</div>

</div>
</div>

    </div>
  )
}

export default Main_selct_picker;
