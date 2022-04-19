import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Services from './Services';

function Home() {

    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('./DB/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


  return (
    <>

    
            <Banner></Banner>
         

         <div className="container mt-5">
             <div className="row g-0 d-flex flex-md-row flex-column-reverse">
                 <div className="col-md-6 p-5 bg-primary rounded-start shadow-lg">
                     <h5 className='text-warning'>Meet Your Hygienist</h5>
                     <h1 className='text-white fw-bold'>Doctor Poul, RDH</h1>
                     <p className='lead text-white mt-5'>Born in Venezuela and raised in New York City, Poul has devoted her time to creating healthy smiles and building strong relationships with her patients. She graduated from New York City College of Technology with a degree in Dental Hygiene. During her time there, she was elected as a board member of the American Dental Hygiene Students Association.</p>
                     <p className='lead text-white mt-5'>Poul is passionate about educating patients on their oral health which she knows will lead to improved overall wellness.</p>
                 </div>
                 <div className="col-md-6 rounded-end rounded-3">
                     <img src="https://images.squarespace-cdn.com/content/v1/5f720e7931779b61e4749ae0/1607554944958-1OETFNYCZ9H0YZLS58C4/IMG_1777.jpg" className='img-fluid' alt="" />
                 </div>
             </div>
         </div>

         

         {/* Services */}

         <div className="container mt-5 mb-5">
             <h1 className='mt-5 display-2 text-center mb-5 fw-bolder text-primary'>Services</h1>
             <div className="row g-5 mt-5">
                 {services.map(service => <Services key={service.id} service={service}></Services>)}
             </div>
         </div>
    </>
  );
}

export default Home;
