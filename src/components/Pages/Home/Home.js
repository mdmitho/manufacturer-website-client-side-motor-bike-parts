import React from 'react';
import { Footer } from 'react-day-picker';
import AboutUs from '../About-Us/AboutUs';
import Banner from '../Banner/Banner';
import BusinessTrust from '../BusinessTrust/BusinessTrust';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
      <div className="">
        <Banner></Banner>
        <div className="container mx-auto">
          <Parts></Parts>
          <AboutUs></AboutUs>
        </div>
    <BusinessTrust></BusinessTrust>
   <Reviews></Reviews>
      </div>
    );
};

export default Home;