import React from 'react';
import profile from '../../images/kamrul-pic.png';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
            <div className="col">
              <img src={profile} alt="" />
            </div>
            <div className="col bg-info">
            <h3 className='text-white p-3 fw-bold'>My name is Kamrul</h3>
            <p className='lead fw-bold text-white p-3'>
            Hello Everyone. First of all take my Salam. I have passed B.Sc in EEE & graduated from World  University Of Bangladesh. But now there is a one goal in my life as a web developers. I want to be a sucessfull web developer. For this i try hard to reach my goal. Al though still i am not good enough but Still i am working hard. Next few months i had to work hard, and also need a lots of practice. Please Allah all my wishes come true.Keep me in your prayers. And also lots of thanks to Programming Hero.
            </p>
            </div>
      </div>
    </div>
  );
};

export default About;