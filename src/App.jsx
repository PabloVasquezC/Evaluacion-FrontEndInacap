import React from 'react'
import  Pizarra from './components/Pizarra/Pizarra'
import  Pared  from './components/Pared/Pared'
import  NotaAdhesiva  from './components/NotaAdhesiva/NotaAdhesiva'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <div>
        <Pared>
            <SideBar />
            <Pizarra>
                <NotaAdhesiva texto={"Tarea#1"}>
                    
                </NotaAdhesiva>

                <NotaAdhesiva texto={"Tarea#1"}>
                    
                </NotaAdhesiva>
                <NotaAdhesiva texto={"Tarea#1"}>
                    
                </NotaAdhesiva>
              
            </Pizarra>
        </Pared>
    </div>
  )
}

export default App;