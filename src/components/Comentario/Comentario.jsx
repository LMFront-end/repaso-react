import React from 'react'

import {Avatar} from './Avatar';

const Comentario = ({sujeto}) => {
    return (
    <>
    <h1>Comentarios</h1>
    <hr className="bg-light"/>
    <div className="media">
        <Avatar urlImage={sujeto.urlImage}/>
        <div className="media-body">
            <h5 className=" mt-0">{sujeto.nombre}</h5>
            <p>
                {sujeto.texto}
            </p>
        </div>
    </div>
    </>
    )
}

export {Comentario}