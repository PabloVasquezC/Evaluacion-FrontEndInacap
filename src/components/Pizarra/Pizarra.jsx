import React from 'react'
import './Pizarra.css'

const Pizarra = ({children}) => {
  return (
    <div id="marcoPizarra" className='d-flex justify-content-center align-items-center flex-wrap'>
        <div id="pizarraDeCorcho" className='d-flex justify-content-center align-items-center'>
            {children}
        </div>
    </div>
  )
}

export default Pizarra