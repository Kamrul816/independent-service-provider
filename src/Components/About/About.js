import React from 'react';

function About() {
  return (
    <>
        <div className="container">
          <h1 className='text-center fw-bolder my-3'>About Me</h1>
          <div className="row d-flex justify-content-center mt-4">
              <div className="col-4">
              <img src="./img/profile.jpg" width='400px' height='400px' alt="" />
              </div>
          </div> 
          <div className="row  mt-4">
            <p className='lead text-center'><span className='fw-bolder'>Name:</span> Md Al Farhan</p>
          </div>
          <div className="row  mt-4">
            <p className='lead text-center'><span className='fw-bolder'>Date Of Birth : </span> 15/10/2000 </p>
          </div>
          <div className="row  mt-4">
            <p className='lead text-center'><span className='fw-bolder'>EDUCATION : </span> Diploma In CSE </p>
          </div>
          <div className="row mb-5 mt-4 d-flex justify-content-center">
            <div className="col-4">
            <p className='lead'>Now, exactly 2 years later, I want to introduce myself as a senior developer, And I want to see myself working as a senior developer in a reputed company in 2 years.</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default About;
