import React from 'react';
import './Pared.css'

const Pared = ({children}) => {
  return (
    <div id="background" className='d-flex justify-content-center align-items-center'>
      {children}
    </div>
  )
}

export default Pared;
