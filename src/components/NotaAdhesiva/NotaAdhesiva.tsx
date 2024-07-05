import React from 'react'
import './NotaAdhesiva.css'



function NotaAdhesiva({texto}) {
  return (
    <>
    
    <div id="nota" className='d-flex justify-content-center align-items-center'>
        <div id='pincho'></div>
        <p id='texto'>{texto}</p>
    </div>
    </>
  )
}

export default NotaAdhesiva;