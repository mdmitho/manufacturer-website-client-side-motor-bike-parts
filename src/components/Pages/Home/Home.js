import React from 'react';
import { Footer } from 'react-day-picker';
import AboutUs from '../About-Us/AboutUs';
import Banner from '../Banner/Banner';
import Parts from '../Parts/Parts';

const Home = () => {
    return (
      <div className="">
        <Banner></Banner>
        <div className="container mx-auto">
          <Parts></Parts>
          <AboutUs></AboutUs>
        </div>
    

      </div>
    );
};

export default Home;