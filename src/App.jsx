import React from 'react'
import  Pizarra from './components/Pizarra/Pizarra'
import  Pared  from './components/Pared/Pared'
import  NotaAdhesiva  from './components/NotaAdhesiva/NotaAdhesiva'
import SideBar from './components/SideBar/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div>
        <Pared>
            <SideBar />
            <Pizarra>
                <NotaAdhesiva texto={"Tarea#1"}>
                    
                </NotaAdhesiva>

                <NotaAdhesiva texto={"Tarea#2"}>
                    
                </NotaAdhesiva>

                <NotaAdhesiva texto={"Tarea#3"}>
                    
                </NotaAdhesiva>

                

                

            </Pizarra>
          <FontAwesomeIcon icon="fa-solid fa-plus" />

        </Pared>
    </div>
  )
}

export default App;