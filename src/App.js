import './App.css';
import  codecamplogo from './imagenes/codecamp1.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  // hook y estado del numero
  const [numClics, setNumClics] = useState(0); 

  // function que aumenta clics
  const manejarClic = () => {
    setNumClics(numClics + 1);
    
  };

  // funtion que reinicia
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (

    <div className="App">
        <div className='freecodecamp-logo-contenedor' >
          <img className='freecodecamp-logo' src={codecamplogo} alt='logo de frecodecamp'  /> 
        </div>

    <div className='contenedor-principal' >
    {/* componente contador */}
    <Contador numClics={numClics} />
    
    {/* componente de boton */}
    <Boton texto='Clic'
     esbotonDeClic={true}
    manejarClic={manejarClic} 
    />
    <Boton texto='Reiniciar'
    esbotonDeClic={false} 
    manejarClic={reiniciarContador}  />
    </div>

    </div>
  );
}

export default App;
