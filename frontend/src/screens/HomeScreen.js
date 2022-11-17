import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { useParams } from 'react-router-dom';


import '../assets/css/style.css';
import './HomeScreen.css';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Counts } from '../components/Counts';
import { WhyUs } from '../components/WhyUs';
import { CTA } from '../components/CTA';
import { Services } from '../components/Services';
import { LittleStore } from '../components/LittleStore';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { SecondHeader } from '../components/SecondHeader';

const HomeScreen = () => {

  return (
    <div>
      <SecondHeader />
      <Hero />
      <About />
      <Counts />
      <WhyUs />
      <CTA />
      <Services />
      <LittleStore />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default HomeScreen;
