import React from 'react'
import {CiHome} from "react-icons/ci"
const Bottom_bar = () => {
  return (
    <div>
     <div className="bottom_bars">

     <div className="row">
        <div className="anchors_with_tooltips">
        <button type="button" class="btn btn_danger"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
 <div className="icons">
    <CiHome/>
 </div>
 <div className="imgs">
    <figure>
        <img src="https://dummyimage.com/100x55/e84173/fff&text=100**55" alt="ntn" className='img-fluid rounded' />
    </figure>
 </div>
</button>

<button type="button" class="btn btn_danger"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
 <div className="icons">
    <CiHome/>
 </div>
 <div className="imgs">
    <figure>
        <img src="https://dummyimage.com/100x55/e84173/fff&text=100**55" alt="ntn" className='img-fluid rounded' />
    </figure>
 </div>
</button>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Bottom_bar
