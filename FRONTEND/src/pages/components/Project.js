import React, { useState } from 'react';

// Components
import Modal from '../../shared/components/UIElements/Modal';

import './Project.css';

const Project = ({
  title,
  date,
  description,
  technologies,
  git,
  website,
  screenshot,
  modalshot,
  onLoad,
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);

  const closeModalHandler = () => setShowModal(false);

  return (
    <>
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header={title}
        subheader={date}
        git={git}
        website={website}
      >
        <div className='project-container'>
          <h3>Description</h3>
          <p className='project-description'>
            {description}
          </p>
          <h3>Technologies</h3>
          <p className='project-technologies'>
            {technologies}
          </p>
        </div>
      </Modal>

      <button onClick={openModalHandler} className='portfolio__item'>
        <img
          src={screenshot}
          alt={title}
          className='portfolio__img'
          onLoad={onLoad}
        />
      </button>
    </>
  );
};

export default Project;
