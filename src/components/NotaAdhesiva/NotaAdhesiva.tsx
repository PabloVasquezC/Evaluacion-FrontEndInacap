import React, { useState } from 'react';
import './NotaAdhesiva.css';

function NotaAdhesiva({ textoInicial }) {
  const [visible, setVisible] = useState(true);
  const [texto, setTexto] = useState(textoInicial);

  function onDeleteNote() {
    setVisible(false);
  }

  function handleTextChange(event) {
    setTexto(event.target.value);
  }

  if (!visible) {
    return null;
  }

  return (
    <>
      <div id="nota" className='d-flex justify-content-center align-items-center'>
        <div id="pinchoYCloseButton">
          <div id='pincho'></div>
          <button id='eliminar_nota' 
            onClick={onDeleteNote}
            className='btn btn-danger m-3'
            >X</button>
        </div>
        <textarea 
          id='texto' 
          value={texto} 
          onChange={handleTextChange} 
        
        />
      </div>
    </>
  );
}

export default NotaAdhesiva;
