
import React from 'react'

const RenderChat = ({ mensajes }) => {
    if (mensajes.length < 2) {
        return <div>No hay mensajes</div>
    }

    return (
        <div className='renderchat-padre'>
            {mensajes.map((mensaje) => (
                <div key={mensaje.id}  className='renderchat-contenedor'>
                    <p className='renderChat-p'>{mensaje.text}</p> 
                </div>
            ))}
        </div>
    )
}

export default RenderChat;