import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';


function ListaDeTareas(){

    // hacer un arreglo con un hook 
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        console.log(tarea);
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();

            // Se convierte a tareas individuales del arreglo
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
        /*console.log("Tarea agregada");
        console.log(tarea);*/
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        // 'map' necesita que retornemos un valor
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    // un componente no puede tener dos elementos 'div'
    return (
        // Etiquetas vacias =  Fragmentos en REACT
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key = {tarea.id}
                            id = {tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;