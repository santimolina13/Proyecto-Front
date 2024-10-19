/* import React from 'react'
import { crearMensaje } from '../../../dataworkspace'

function NuevoMensaje({workspaceCanal, workspacedata}) {
    const handleSubmitMensajes = (e) => {
        e.preventDefault()
        const formchat = new FormData(e.target)
        const text = formchat.get("nuevo_mensaje")
        crearMensaje(workspacedata.id,workspaceCanal.id,text)
        e.target.reset()  
    }
  return (
    <div>
        <form onSubmit={handleSubmitMensajes}>
            <input type="text" name='nuevo_mensaje'/>
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default NuevoMensaje */

import React from 'react';
import { AiOutlineEnter } from "react-icons/ai";

import { crearMensaje } from '../../../dataworkspace'

function NuevoMensaje({ workspaceCanal, workspacedata, onNewMessage }) {
    const handleSubmitMensajes = (e) => {
        e.preventDefault()
        const formchat = new FormData(e.target)
        const text = formchat.get("nuevo_mensaje")

        // Crea el mensaje
        crearMensaje(workspacedata.id, workspaceCanal.id, text);
        e.target.reset()

        // Llama a la función de callback después de crear el mensaje
        onNewMessage()
    }

    return (
        <div className='section-mensajes-form'>
            <form onSubmit={handleSubmitMensajes} className='section-mensajes-form-2'>
                <textarea type="text" name='nuevo_mensaje' className='section-mensaje-input' />
                <button className='section-mensaje-button'><AiOutlineEnter className='mensaje-button-icon' /></button>
            </form>
        </div>
    );
}

export default NuevoMensaje;