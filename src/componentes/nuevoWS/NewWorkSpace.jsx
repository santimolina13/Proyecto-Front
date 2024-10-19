import React from 'react'

const NewWorkSpace = () => {
    


  return (
  <div>
      <h2>Crea un entorno de trabajo</h2>
      <form >
        <label htmlFor="entornoT">Nombre del entorno de trabajo</label>
        <input type="text" placeholder='Igrese un nombre...' id='entornoT'/>
        <label htmlFor="canal">Nombre del canal #</label>
        <input type="text" placeholder='Ingrese un nombre...' id='canal'/>
        <button>Crear</button>
        <button>Cancelar</button>

      </form>
      
  </div>
  )
}

export default NewWorkSpace