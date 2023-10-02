import React from 'react';
import Tilt from 'react-parallax-tilt'
import './logo.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBrain} from '@fortawesome/free-solid-svg-icons';

export const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
      style={{width: '200px', height: '200px'}}
      className='Tilt shadow-2 flex justify-center items-center'
      tiltMaxAngleY={20} tiltMaxAngleX={20} >
        <div className="Tilt-inner">
          <FontAwesomeIcon id='brain-logo'  icon={faBrain} />
        </div>
      </Tilt>
    </div>
  );
}
