import React, {useState} from 'react'

const Lista = () => {

    const [listaNumero, setListaNumero] = useState([1,2,3,5,6,7,8]);

    const [numero, setNumero] = useState(9)

    //const nuevosNumeros = [9,10,11,12];

    const agregarElemento = () => {

        setNumero(numero + 1);

        console.log('Click')
        setListaNumero([...listaNumero, numero]);
    }

  return (
    <>
        <h2>Lista Array</h2>
        <button onClick={agregarElemento}>Agregar</button>
        {
            listaNumero.map((item, index) => {
                return <p key={index}>{item * 2}-{index}</p>
            })
        }
    </>
  )
}

export {Lista}