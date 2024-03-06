import React from "react";
import SelectLow_Components from "./select_Component/select_Component.js";
import { SelectMedium_Components, SelectHigh_Components } from "./select_Component/select_Component.jsx";

const HandleTaskExpiration = ({ setAgeExpiration, ageExpiration }) => {
    return (
        <>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Change the duration of high priority
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <SelectLow_Components setAgeExpiration={setAgeExpiration} ageExpiration={ageExpiration} />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Change the duration of medium priority
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <SelectMedium_Components setAgeExpiration={setAgeExpiration} ageExpiration={ageExpiration} />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Change the duration of low priority
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <SelectHigh_Components setAgeExpiration={setAgeExpiration} ageExpiration={ageExpiration} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HandleTaskExpiration;