import React from 'react';
import '../Style/Hire_Me.css'

function Hire_Me() {
  return (
    <>
      <div className="hire_me_main">
        <div className="container">
          <div className="main_headings">
            <h2 className='text-center mt-5 mb-5'>Registration Form</h2>
          </div>

          <div className="hire_me_section">

            <div className="row">
              <div className="col-sm-4">
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>

              </div>

              <div className="col-sm-4">

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
              </div>
              <div className="col-sm-4">

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>

              </div>

              <button  type="submit" className='btn mt-5 mb-5  btn_danger' >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hire_Me;