
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Messages-style.css";
import RenderCanales from '../../componentes/ListaDeCanales/RenderCanales';
import RenderChat from '../../componentes/Chatsection/RenderChat';
import { obtenerWorkspacesPorId, obtenerMensajesPorCanalId } from '../../../dataworkspace'; 
import CrearCanal from '../../componentes/AgregarCanal/CrearCanal';
import NuevoMensaje from '../../componentes/NuevoMensaje/NuevoMensaje';
import { MdAdd, MdArrowBack } from "react-icons/md";


const Messages = () => {
    const { workspace_id, channels_id } = useParams()
    const nombrews=obtenerWorkspacesPorId(workspace_id)
    
    const [workspacedata, setWorkspaceData] = useState(null)
    const [mensajes, setMensajes] = useState([])
    const [openFormNewChannel,setopenFormNewChannel]=useState(false)
    const  toggleOpenFormNewChannel=()=>{
        setopenFormNewChannel(!openFormNewChannel)
    }

    useEffect(() => {
        // Obtener los datos del workspace
        const data = obtenerWorkspacesPorId(workspace_id)
        setWorkspaceData(data)

        // Obtener mensajes iniciales
        if (channels_id) {
            const mensajesData = obtenerMensajesPorCanalId(workspace_id, channels_id);
            setMensajes(mensajesData)
        }
    }, [workspace_id, channels_id])

    const handleChannelCreated = () => {
        // Actualiza los datos del workspace si se crea un nuevo canal
        const updatedData = obtenerWorkspacesPorId(workspace_id);
        setWorkspaceData(updatedData);
    };

    const handleNewMessage = () => {
        const updatedMensajes = obtenerMensajesPorCanalId(workspace_id, channels_id);
        setMensajes(updatedMensajes)
    };

    if (!workspacedata) return <div>Loading...</div>

    const workspaceCanal = workspacedata.channels.find(canal => canal.id == channels_id)

    return (
        <div className='chatpages'>
            
            <div className='contenedor-prueba'>
                <aside className='aside-canales'>
                    <div className='falsonav'><Link to='/' className='volver_inicio_Link'><MdArrowBack className="volver_inicio"/></Link>
                    <h2 className='aside-canales-h2'>{nombrews.name}</h2></div>
                    
                    <RenderCanales workspacedata={workspacedata} />
                    {openFormNewChannel?(<CrearCanal workspacedata={workspacedata} onChannelCreated={handleChannelCreated} setopenFormNewChannel={toggleOpenFormNewChannel} />):
                    <span type="button" onClick={toggleOpenFormNewChannel} className='aside-canales-crear'><MdAdd className='aside-canales-crear-icon'/></span>}
                    
                </aside>
                
                <main className='main-messages'>
                
                    <section className='section-mensajes'>
                        <RenderChat workspaceCanal={workspaceCanal} mensajes={mensajes} />
                    </section>

                    <NuevoMensaje workspaceCanal={workspaceCanal} workspacedata={workspacedata} onNewMessage={handleNewMessage} />
                </main>
            </div>
        </div>
    );
};

export default Messages