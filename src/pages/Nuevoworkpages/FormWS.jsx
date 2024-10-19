import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import "./style-form.css"
import { useNavigate } from 'react-router-dom'
import { crearworkspace } from '../../../dataworkspace'



const FormWS = () => {
  const navigation = useNavigate()
  
  const handleSubmitEntornos = (e) => {
    e.preventDefault()
    const formEntornos = new FormData(e.target)
    const workspace = formEntornos.get("workspace")
    const canal = formEntornos.get("canales")
    const nuevoworkspace = {
      id: uuidv4(),
      name: workspace,
      channels: [
        {
          id: uuidv4(),
          name: canal,
          messages: [
            {
              id: uuidv4(),
              author: '',
              text: '',
            },
          ],
        },
      ],
    }
    if(canal.length>3&&workspace.length>3)
      {crearworkspace(nuevoworkspace)
        navigation("/")
        
      }
      
    
  }

  return (
    <div className='form-page'>
      
      <h2 className='form-h2'>Crea un entorno de trabajo</h2>
      <form className='form-padre' onSubmit={handleSubmitEntornos}>
        <div className='input-padre'>
          <label htmlFor="entornoT" className='input-label'>Nombre del entorno de trabajo</label>
          <input type="text" placeholder='Ingrese un nombre...' id='entornoT' name='workspace' />
        </div>
        <div className='input-padre'>
          <label htmlFor="canal" className='input-label'>Nombre del canal #</label>
          <input type="text" placeholder='Ingrese un nombre...' id='canal' name='canales' />
        </div>
        <div className='form-botonera'>
          <button className='botonera-btn'>Crear</button>
          
        </div>
      </form>

    </div>
  )
}

export default FormWS