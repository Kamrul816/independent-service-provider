import React from 'react';

function Footer() {
  return (
    <>
        <div className="container-fluid bg-primary mt-5 footer">
           <div className="container">
            <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-white display-5 fw-bold mt-3 mb-3 ms-4'>DOCTOR POUL</h1>
                        <div className='d-flex p-3 align-items-center'>
                            <i className="fa-solid fa-location-pin fw-bolder display-5 text-white"></i>
                            <p className='text-white ms-3 lead'>145 Canal St, 2nd Fl <br />  New York, NY 10002</p>
                        </div>
                        <div className='d-flex align-items-center p-3'>
                            <i className="fa-solid fa-phone fw-bolder display-5 text-white"></i>
                            <p className='text-white ms-3 lead'>(917) 388-3678</p>
                        </div>
                        <div className='d-flex p-3'>
                            <i className="fa-solid fa-envelope  fw-bolder display-5 text-white mt-1"></i>
                            <p className='text-white ms-3 lead'>info@bowerydental.com</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className='text-white display-5 fw-bold mt-3 mb-3 ms-4'>Office Hours</h1>
                        <p className='text-white ms-4 lead p-3'>(Sunday To Friday)</p>
                        <p className='text-white ms-4 lead ps-3'>(9AM To 6PM)</p>
                    </div>
                </div>
           </div>
           <div className="row bg-white">
                <p className='text-center p-3 lead'>Doctor Poul © 2022</p>
           </div>
        </div>
    </>
  );
}

export default Footer;
