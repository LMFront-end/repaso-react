import React from 'react'

const Jsx = () => {

    const saludo = "Hola desde React";
    const temperature = 22;

  return (
    <>
    <h2>Jsx</h2>
    <h3>{saludo}</h3>
    <h4>
    {
        temperature > 23 ? 'hace calor' : 'Hace frio'
    }
    </h4>
    </>
  )
}

export {Jsx};