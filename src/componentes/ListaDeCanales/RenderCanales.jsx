import React from 'react'
import { Link } from 'react-router-dom'

const RenderCanales = ({workspacedata}) => {
    const canalRender=workspacedata.channels.map(canal=>{
        return(
          <div key={canal.id} className='item-canal-list'>
            <Link to={"/workspace/"+workspacedata.id+"/"+canal.id} className='link-canal-list'>#{canal.name}</Link>
          </div>)})
  return (
    <div className="canal-list">{canalRender}</div>
  )
}

export default RenderCanales