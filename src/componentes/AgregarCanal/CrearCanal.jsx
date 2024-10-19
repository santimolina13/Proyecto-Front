
import React, { useState } from 'react';
import { crearCanal } from '../../../dataworkspace';


const CrearCanal = ({ workspacedata, onChannelCreated, setopenFormNewChannel}) => {
  const [canalName,setCanalName]=useState("")
  const  togglecloseFormNewChannel=()=>{
    setopenFormNewChannel(false)
}
  const handleSubmitcanales = (e) => {
    e.preventDefault()
    const formcanal = new FormData(e.target)
    const canal = formcanal.get("nombre_canal")
    if( canal.length >= 5) {
      crearCanal(workspacedata.id, canal)
      setCanalName("")
      setopenFormNewChannel()
    }
    else{setCanalName("Nombre incorrecto")}
    
    if (onChannelCreated) {
      onChannelCreated()
  
    }
    
    e.target.reset()
  }

  return (
    <div className="modal">
      <form onSubmit={handleSubmitcanales} className='modal-content'>
        <div className='form-nuevo-canal-form-'>
          <h3 className="form-nuevo-canal-h3">Nuevo Canal</h3>
          <label className='form-nuevo-canal-form-label'>Ingrese un nombre</label>
          <input type="text" name='nombre_canal' className='form-nuevo-canal-form-input'/>
        </div>
        <div>
          <button className='form-nuevo-canal-btn'>Crear</button>
          <button type='button'onClick={togglecloseFormNewChannel} className='form-nuevo-canal-btn'>Cancelar</button>
        </div>
      </form>
    </div>
  )
}

export default CrearCanal