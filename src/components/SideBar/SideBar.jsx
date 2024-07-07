import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'
import { useState } from 'react';

const SideBar = () => {
  
  const [sideNavBarIsOpen, setSideNavBarIsOpen] = useState(false);

  
  

  const handleHamburgClick = () => {
    setSideNavBarIsOpen(!sideNavBarIsOpen);
    console.log(sideNavBarIsOpen);
  }

  

  return (
    <>
      {sideNavBarIsOpen ? 
      <div>
        <div id='side-bar'>
          <div id='side-bar-header'
            className='d-flex '>
            <h1 className='text-white m-3 text-center'>Menu</h1>
            <button id='close-side-bar' 
              className='btn btn-danger m-3'
              onClick={handleHamburgClick}>
                X
            </button>
          </div>
          <hr className='text-white mx-3' />
          <div id='side-bar-body'>
            <ul>
              <li>Home</li>
              <li>Profile</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
      </div> 
      : 
      <button id='button-hamburgesa' onClick={handleHamburgClick}>
        <FontAwesomeIcon id='hamburgesa' icon={faBars} size="2x"/>
      </button>}     
    </>
  );
};

export default SideBar;

{/* <button id='button-hamburgesa' onClick={handleHamburgClick}>
<FontAwesomeIcon id='hamburgesa' icon={faBars} size="2x"/>
</button> */}