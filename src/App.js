import './App.css';
import freeCodeCampLogo from './img/Judas-Priest-logo.webp';
import ListaDeTareas from './componentes/ListaDeTareas.js';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className ="freecodecamp-logo-contenedor">
          <img 
            src = {freeCodeCampLogo}
            className = 'freecodecamp-logo'/>
      </div>
      <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          {/* <TareaFormulario/> */}
          <ListaDeTareas />
        </div>
    </div>
  );
}

export default App;
