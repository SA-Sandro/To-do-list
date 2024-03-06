import React from "react";
import History from "./history_map/history.jsx";
import HandleTaskExpiration from "./handleTaskExpiration/handleTaskExpiration.js";

const SideBarComponent = ({ setCompletedTask, completedTask, setAgeExpiration, ageExpiration }) => {
    return (
        <>
            <div className="div__span_settings">
                <a type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <span className=""><i className="bi bi-gear-fill"></i></span>
                </a>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header d-grid">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="offcanvas-title settings_title" id="offcanvasWithBothOptionsLabel">Settings</h5>
                        <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
                    </div>
                </div>
                <div className="offcanvas-body">
                    <div className="my-3">
                        <HandleTaskExpiration setAgeExpiration={setAgeExpiration} ageExpiration={ageExpiration} />
                    </div>
                    <div className="dropdown  text-center">
                        <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                            Show history
                        </button>
                        <div className="my-3">
                            <div className="collapse" id="collapseWidthExample">
                                <div className="card card-body div_history d-flex flex-column ">
                                    <h2 className="">History</h2>
                                    <History setCompletedTask={setCompletedTask} completedTask={completedTask} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBarComponent;