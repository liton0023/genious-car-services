import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ServiceTime from '../serviceTime/ServiceTime';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <ServiceTime></ServiceTime>
        </div>
    );
};

export default Home;