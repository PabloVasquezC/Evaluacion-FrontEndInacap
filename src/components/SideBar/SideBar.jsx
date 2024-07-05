import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'

const SideBar = () => {
  return (
    <>
      <FontAwesomeIcon id='hamburgesa' icon={faBars} size="2x" />
    </>
  );
};

export default SideBar;