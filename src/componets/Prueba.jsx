import React from 'react'

const Prueba = ({resultado}) => {
    const {name , main} = resultado

    if(!name) return null
  return (
    <div>
        <h1>La temperatura de {name} es {main.temp}</h1>
    </div>
  )
}

export default Prueba
