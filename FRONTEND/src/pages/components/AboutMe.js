import React from 'react';

// Pictures
import FamilyPic from '../../assets/pictures/picture-4.jpg';

import './AboutMe.css';

const AboutMe = (props) => {
  return (
    <section className='about-me' id='about'>
      <h2 className='section__title section__title--about'>Who I am</h2>
      <p className='section__subtitle section__subtitle--about'>
        Developer & Musician based out of Montreal, Quebec
      </p>
      <img src={FamilyPic} alt='family-pic' className='about-me__img' />
      <div className='about-me__body'>
        <p>
          I am a junior full-stack developer who is passionate about building
          responsive web sites and web apps. I have a keen interest in
          continuous learning while being able to adapt to fast paced work
          environments.
        </p>
        <p>
          I previously worked as a lead architectural technologist at a truss
          manufacturer in Calgary Alberta, where I produced structural drawings
          for commercial and residential buildings using AutoCad and other
          engineered drafting programs.
        </p>
        <p>
          I also have a strong passion for writing, recording and performing
          music and have had the opportunity to tour extensively while pursing
          my creative endeavours.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
