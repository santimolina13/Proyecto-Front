import React from 'react'
import "./style-worklist.css"
import { Link, useParams } from 'react-router-dom'
import { obtenerWorkspaces } from '../../../dataworkspace'


const Workspacerenderlist = () => {
  
  const workspace = obtenerWorkspaces()

  return (

    <div className='worklist-contenedor'>
      <h1 className='home-titulo'>Bienvenido a SantiLacK</h1>
      <div>
        <h2 className='Mis_entornos_titulo'>
          Mis entornos
        </h2>
      </div>
      <div className='worklist-contenedor-card'>
        {workspace.map((item) => {
          return (
            <Link key={item.id} className='item-workspace'to={"/workspace/" + item.id + "/"+item.channels[0].id}>
              <div className='item-name'>
                <h3 className='item-name'>{item.name}</h3>
              </div>
              <span  className='item-workspace-link'>Entrar</span>
              </Link>
          )
        })}
      </div>
      
        <Link to={"/workspace/new"} className='botonera-btn-link'>Crear Entorno</Link>
      
    </div>
  )
}


export default Workspacerenderlist