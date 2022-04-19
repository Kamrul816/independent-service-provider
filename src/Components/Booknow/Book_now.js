import React from 'react';

function Book_now() {
  return (
    <>
        <div className="container">
          <h1 className='text-center mt-4'>Book An Appointment</h1>

          <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Your Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Your Email</label>
                  <input type="email" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Your Phone</label>
                  <input type="email" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Appointment Date</label>
                  <input type="date" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
    </>
  );
}

export default Book_now;
