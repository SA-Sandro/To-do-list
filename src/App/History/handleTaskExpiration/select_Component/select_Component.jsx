import React from "react";

const SelectLow_Components = ({ ageExpiration, setAgeExpiration }) => {
    return (
        <div className="div__inputs d-flex">
            <div className="div__input--dias p-3">
                <select onChange={(e) => setAgeExpiration(prevState => {
                    let newState = [...prevState]; // Copia del estado anterior
                    newState[0].high[0] = parseInt(e.target.value); // Modifica el valor deseado
                    return newState; // Devuelve el nuevo estado modificado
                })}>
                    <option defaultChecked>{ageExpiration[0].high[0]}</option>
                    {[...Array(11).keys()].map(i => (
                        <option key={i}>{i}</option>
                    ))}
                </select> days
            </div>
            <div className="div__input--horas p-3">
                <select onChange={(e) => setAgeExpiration(prevState => {
                    let newState = [...prevState]; // Copia del estado anterior
                    newState[0].high[1] = parseInt(e.target.value); // Modifica el valor deseado
                    return newState; // Devuelve el nuevo estado modificado
                })}>
                    <option defaultChecked>{ageExpiration[0].high[1]}</option>
                    {
                        [...Array(25).keys()].map(i => (
                            <option key={i}>{i}</option>
                        ))
                    }
                </select> hours
            </div>
            <div className="div__input--minutos p-3">
                <select onChange={(e) => setAgeExpiration(prevState => {
                    let newState = [...prevState]; // Copia del estado anterior
                    newState[0].high[2] = parseInt(e.target.value); // Modifica el valor deseado
                    return newState; // Devuelve el nuevo estado modificado
                })}>
                    <option defaultChecked>{ageExpiration[0].high[2]}</option>
                    {
                        [...Array(61).keys()].map(i => (
                            <option key={i}>{i}</option>
                        ))
                    }
                </select> minutes
            </div>
        </div>
    )

}

export const SelectMedium_Components = ({ setAgeExpiration, ageExpiration }) => {
    return (
        <div className="div__inputs d-flex">
            <div className="div__input--dias p-3">
                <select onChange={(e) => setAgeExpiration(prevState => {
                    let newState = [...prevState]; // Copia del estado anterior
                    newState[1].medium[0] = parseInt(e.target.value); // Modifica el valor deseado
                    return newState; // Devuelve el nuevo estado modificado
                })}>

                    <option defaultChecked>{ageExpiration[1].medium[0]}</option> { /*da fallos */}
                    {
                        [...Array(11).keys()].map(i => (
                            <option key={i}>{i}</option>
                        ))
                    }
                </select> days
            </div>
            <div className="div__input--horas p-3">
                <select onChange={(e) => setAgeExpiration(prevState => {
                    let newState = [...prevState]; // Copia del estado anterior
                    newState[1].medium[1] = parseInt(e.target.value); // Modifica el valor deseado
                    return newState; // Devuelve el nuevo estado modificado
                })}>
                    <option defaultChecked>{ageExpiration[1].medium[1]}</option>
                    {
                        [...Array(25).keys()].map(i => (
                            <option key={i}>{i}</option>
                        ))
                    }
                </select> hours
            </div>
            <div className="div__input--minutos p-3">
                <select onChange={(e) => setAgeExpiration(prevState => {
                    let newState = [...prevState]; // Copia del estado anterior
                    newState[1].medium[2] = parseInt(e.target.value); // Modifica el valor deseado
                    return newState; // Devuelve el nuevo estado modificado
                })}>
                    <option defaultChecked>{ageExpiration[1].medium[2]}</option>
                    {
                        [...Array(61).keys()].map(i => (
                            <option key={i}>{i}</option>
                        ))
                    }
                </select> minutes
            </div>
        </div>
    )

}

export const SelectHigh_Components = ({ setAgeExpiration, ageExpiration }) => {

    return (
        <div className="div__inputs d-flex">
            <div className="div__input--dias p-3">
                <select onChange={(e) => setAgeExpiration(prevState => {
                    let newState = [...prevState]; // Copia del estado anterior
                    newState[2].low[0] = parseInt(e.target.value); // Modifica el valor deseado
                    return newState; // Devuelve el nuevo estado modificado
                })}>

                    <option defaultChecked>{ageExpiration[2].low[0]}</option> 
                    {
                        [...Array(11).keys()].map(i => (
                            <option key={i}>{i}</option>
                        ))
                    }
                </select> days
            </div>
            <div className="div__input--horas p-3">
                <select onChange={(e) => setAgeExpiration(prevState => {
                    let newState = [...prevState]; // Copia del estado anterior
                    newState[2].low[1] = parseInt(e.target.value); // Modifica el valor deseado
                    return newState; // Devuelve el nuevo estado modificado
                })}>
                    <option defaultChecked>{ageExpiration[2].low[1]}</option>
                    {
                        [...Array(25).keys()].map(i => (
                            <option key={i}>{i}</option>
                        ))
                    }
                </select> hours
            </div>
            <div className="div__input--minutos p-3">
                <select onChange={(e) => setAgeExpiration(prevState => {
                    let newState = [...prevState]; // Copia del estado anterior
                    newState[2].low[2] = parseInt(e.target.value); // Modifica el valor deseado
                    return newState; // Devuelve el nuevo estado modificado
                })}>
                    <option defaultChecked>{ageExpiration[2].low[2]}</option>
                    {
                        [...Array(61).keys()].map(i => (
                            <option key={i}>{i}</option>
                        ))
                    }
                </select> minutes
            </div>
        </div>
    )

}

export default SelectLow_Components
