import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/app";

// Selecciona el contenedor en el DOM con la clase ".root"
const container = document.querySelector(".root");

// Crea un nuevo "root" en el contenedor seleccionado
const root = createRoot(container);

// Renderiza el componente App dentro de la estructura HTML proporcionada
root.render(
        <div className="div_main shadow-lg rounded bg-white p-5 m-5">
            <h3 className="main__h3 text-center p-2">TO DO LIST</h3>
            <div className="div-app row d-flex justify-content-center px-sm-5 py-3">
                <App />
            </div>
        </div>
);