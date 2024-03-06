import React, { useEffect } from "react";

const History = ({ completedTask, setCompletedTask }) => {

    useEffect(() => {
        // Al cargar el componente, comprueba si hay historial de tareas en el almacenamiento local
        if (localStorage.getItem("task_history")) {
            // Si hay historial de tareas, lo obtiene del almacenamiento local y lo establece en el estado
            const task_list = JSON.parse(localStorage.getItem("task_history"));
            setCompletedTask(task_list);
        }
    }, []);

    // Si hay tareas completadas, muestra la lista de tareas completadas
    if (completedTask.length > 0) {
        return (
            <>
                <ul className="mx-0 p-0">
                    {completedTask.map((task) => {
                        return task;
                    }).map((t, index) => {
                        return (
                            <li key={index}>
                                <i className="bi bi-check-lg"></i>  <p className="div_history_task_p mx-2 my-0">{t[1]}</p>
                            </li>
                        );
                    })}
                </ul>
                {/* Botón para limpiar el historial */}
                <button className="btn btn-primary p-2" onClick={() => {
                    localStorage.removeItem("task_history");
                    setCompletedTask([]);
                }}>Clear history</button>
            </>
        );
    }
    // Si no hay tareas completadas, muestra un mensaje indicando que no se ha completado ninguna tarea aún
    return (
        <>
            <h5 className="py-3 text-center">Aún no has completado ninguna tarea</h5>
        </>
    );
}

export default History;