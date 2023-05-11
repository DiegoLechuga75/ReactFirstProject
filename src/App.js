import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg/MiOrg';

function App() {

  //Operador ternario &&: Si se cumple la condición muestra el elemento, de lo contrario no muestra nada ===> Syntax: Condicion && elemento a mostrar

  const [mostrarFormulario,actualizarMostrar] = useState(true)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div className="App">
      <Header />
      {mostrarFormulario && <Formulario/>} 
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
