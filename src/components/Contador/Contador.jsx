import React, { useState } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0);

    const aumentar = () => {
        console.log("Me diste un click");
        
        setContador(contador + 1);
    }

    const disminuir = () => {
        console.log("disminuir");

        setContador(contador - 1);
    }

    //const disminuir = () => {}
    
    return (
    <div>
        <h3>Contador: {contador}</h3>
        <button onClick={aumentar}>Aumentar
        </button>
        <button onClick={disminuir}>Disminuir
        </button>
    </div>
    )
}

export {Contador};