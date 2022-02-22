import './App.css';
// import components
//import {Formularios} from './components/Formularios/Formularios';
//import {FormHook} from './components/FormHook/FormHook';
//import { EjemploUno } from "./components/EjemploUno/EjemploUno";
//import { Saludo } from "./components/Saludo/Saludo";

import { Comentario } from "./components/Comentario/Comentario";


function App() {

  const sujeto = {
    nombre: 'Lina',
    urlImage: 'https://via.placeholder.com/64',
    texto: 'Sunt incididunt ullamco'

  }
  return (
    <div className="App">
      <Comentario sujeto={sujeto}/>
    </div>
  );
}

export default App;
