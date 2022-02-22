import React, {useState} from 'react'

const Formularios = () => {

    // name
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: ""
    });

    //onChange
    const handleInputChange = (e) => {

        //console.log('funciona');
        // para que no se recargue la pagina
        //e.preventDefault();

        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
    
        })
    }

    const enviarDatos = (e) => {

        e.preventDefault();

        console.log(`${datos.nombre} ${datos.apellido}`);
    }



    return (
        <>
            <h2>Formulario</h2>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input 
                    placeholder="Ingrese nombre"
                    type="text" 
                    className="form-control"
                    onChange={handleInputChange}
                    name= "nombre"
                    />
                </div>
                <div className="col-md-3">
                    <input 
                    placeholder="ingrese apellido"
                    type="text"
                    className="form-control"
                    onChange={handleInputChange}
                    name = "apellido"
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            <hr />
            <h3>
                {datos.nombre} {datos.apellido}
            </h3>
        </>
    )
}

export {Formularios}