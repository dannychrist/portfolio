import React from 'react';

// Image Imports
import Selfie from '../../assets/pictures/intropic.jpeg';

import './Home.css';

const Home = () => {
  return (
    <section className='intro' id='home'>
      <h1 className='section__title section__title--intro'>
        Hi, I am <strong>Daniel Christiansen</strong>
      </h1>
      <p className='section__subtitle section__subtitle--intro'>
        FULL-STACK-DEV
      </p>
      <img src={Selfie} alt='christmas-pic' className='intro__img' />
      
    </section>
  );
};

export default Home;
