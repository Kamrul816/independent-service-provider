import React from 'react';
import DoctorInfo from '../../DoctorInfo/DoctorInfo';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <DoctorInfo></DoctorInfo>
            <Services></Services>
        </>
    );
};

export default Home;