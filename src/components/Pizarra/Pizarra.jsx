import React from 'react'
import './Pizarra.css'

function Pizarra({children}) {
  return (
    <div id="marcoPizarra" className='d-flex justify-content-center align-items-center'>
        <div id="pizarraDeCorcho" className='d-flex justify-content-center align-items-center'>
            {children}
        </div>
    </div>
  )
}

export default Pizarra