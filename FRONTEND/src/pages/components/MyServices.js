import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './MyServices.css';

const MyServices = (props) => {
  return (
    <section className='my-services' id='services'>
      <h2 className='section__title section__title--services'>What I do</h2>
      <div className='services'>
        <div className='service'>
          <h3>Front-end</h3>
          <p>
            Experience developing front-end projects using React.js, Redux,
            HTML, CSS, and JavaScript ES6.
          </p>
        </div>
        <div className='service'>
          <h3>Back-end</h3>
          <p>
            Experience developing server-side projects with Node.js, Express,
            and MongoDb.
          </p>
        </div>
        <div className='service'>
          <h3>Tools</h3>
          <p>
            Extensive use of Git/Github, Yarn, Styled-Components, and the
            Material-UI library.{' '}
          </p>
        </div>
      </div>
      <Link smooth to='/work'>
        <button className='btn'>My work</button>
      </Link>
    </section>
  );
};

export default MyServices;
