import React, {useState} from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario(props) {

    const [input, setInput] = useState('');

    // 'e' signficia que recibe un evento
    const manejarCambio = e =>{
        setInput(e.target.value);
        
    }

    const manejarEnvio = e => {
        //Permite que no se vuelva a enviar toda la aplicaicón cuadno se envia el formulario
        e.preventDefault();
        console.log("Enviando Formulario...");

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
         props.onSubmit(tareaNueva);
        //console.log(tareaNueva);
    }
    return (
        <form 
        className='tarea-formulario'
        onSubmit={manejarEnvio}>
            <input
            className="tarea-input"
            type='text'
            placeholder='Escribe una Tarea'
            name= 'texto'
            onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    );
}

export default TareaFormulario;