import React from 'react'
import "../Style/Hire_staff.css";
const Hire_staff = () => {
  return (
    <div>

<div className="section_hire_staff">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="deatils_staff_parents_div">
                <div className="main_heading">
                 
                  <h2>
 hire the staff

                  </h2>
                </div>

                  <div className="section_table">
                  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Hire_staff;