import React from 'react';
import { Link } from 'react-router-dom';

function Services(props) {

    const {img, name, description, price} = props.service;

  return (
    <>
      <div className="col-md-4">
        <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description.slice(0,100)}...</p>
                <h6 className='card-title'>Price : $ {price}</h6>
                <dir className='d-flex justify-content-center mt-5'>
                <Link href="#" className="btn btn-primary" to='/book'>Book Now</Link>
                </dir>
            </div>
        </div>
      </div>
    </>
  );
}

export default Services;
