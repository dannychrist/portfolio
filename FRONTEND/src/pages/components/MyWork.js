import React, { useState } from 'react';

// Components
import Project from '../components/Project';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

// Screenshots
import YourPlaces from '../../assets/projects/yourplaces-full.png';
import Hover from '../../assets/projects/hover-full.png';
import Corona from '../../assets/projects/corona-full.png';
import Tetris from '../../assets/projects/tetris-full.png';

import './MyWork.css';

const MyWork = (props) => {
  const [loaded, setLoaded] = useState(false);

  const MyProjects = [
    {
      project: [
        {
          id: '001',
          title: 'YourPlaces',
          date: 'June 2020',
          description:
            "A social media app that allows you to add pictures of places you've visited and share them with the world.",
          technologies: 'MERN stack and CSS.',
          git: 'https://github.com/dannychrist/mern-your-places',
          website: 'https://mern-your-places.herokuapp.com/',
          screenshot: YourPlaces,
        },
        {
          id: '002',
          title: 'H+ver',
          date: 'May 2020',
          description:
            'Developed alongside three colleagues, Hover is an E-Commerce site made with React that allows users to browse and purchase items while using a variety of filtering methods.',
          technologies: 'MERN stack, Styled-Components, and Redux.',
          git: 'https://github.com/dannychrist/mern-hover',
          website: 'https://hover-db788.web.app/',
          screenshot: Hover,
        },
        {
          id: '003',
          title: 'Corona-Tracker',
          date: 'July 2020',
          description:
            'A simple Covid-19 tracker that displays infection statistics for individual countries in readable charts and graphs.',
          technologies:
            'React, JavaScript, Styled-Components, and Material-UI.',
          git: 'https://github.com/dannychrist/coronavirus-tracker',
          website: '',
          screenshot: Corona,
        },
        {
          id: '004',
          title: 'React-Tetris',
          date: 'August 2020',
          description:
            'A clone of the classic NES game TETRIS. Destroy lines of block before it reaches the top! ',
          technologies: 'React, JavaScript, and Styled-Components.',
          git: 'https://github.com/dannychrist/react-tetris-clone',
          website: 'https://react-tetris-clone.nn.r.appspot.com',
          screenshot: Tetris,
        },
      ],
    },
  ];

  const onLoad = () => {
    console.log('loaded!');
    setLoaded(true);
  };

  console.log(MyProjects[0].project);

  return (
    <section className='my-work' id='work'>
      <h2 className='section__title section__title--work'>My Work</h2>
      <p className='section__subtitle section__subtitle--work'>
        A selection of my range of work
      </p>

      <div className='portfolio'>
        {!loaded && <LoadingSpinner asOverlay />}

        {MyProjects[0].project.map((project) => {
          return (
            <Project
              key={project.id}
              title={project.title}
              date={project.date}
              description={project.description}
              technologies={project.technologies}
              git={project.git}
              website={project.website}
              screenshot={project.screenshot}
              modalshot={project.modalshot}
              onLoad={onLoad}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MyWork;
