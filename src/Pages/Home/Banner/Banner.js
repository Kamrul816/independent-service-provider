import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpeg';
import banner2 from '../../../images/banner/banner2.jpeg';
import banner3 from '../../../images/banner/banner3.jpeg';

const Banner = () => {
    
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption  className='carousel-three text-primary'>
                    <h3>Covid-19 Test</h3>
                    <p>On this website you can find information and guidance from WHO regarding the current outbreak of coronavirus disease (COVID-19) that was first reported from Wuhan, China, on 31 December 2019.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption  className='carousel-three text-primary'>
                    <h3>Pressure & Diabetic Check</h3>
                    <p>Diabetes mellitus, commonly known as diabetes, is a metabolic disease that causes high blood sugar. The hormone insulin moves sugar from the blood into your cells to be stored or used for energy.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption  className='carousel-three text-primary'>
                    <h3>Parkinson’s Disease</h3>
                    <p>Parkinson's disease is a brain disorder that leads to shaking, stiffness, and difficulty with walking, balance, and coordination. Parkinson's symptoms usually begin gradually and get worse over time.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;