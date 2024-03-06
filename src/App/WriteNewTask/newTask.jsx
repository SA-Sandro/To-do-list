import React, { useState } from "react";

const NewTask = ({ setArrayList }) => {
    const [taskItem, setTaskItem] = useState(["", ""]);

    const handleClickButton = () => {
        if (taskItem[1].trim() !== '') {
            setArrayList(prevList => {
                const newList = [...prevList, taskItem];
                localStorage.setItem("task_list", JSON.stringify(newList));
                return newList;
            });
            cleanInput();
        }
    };

    const handlePriorityChange = (e) => {
        const prioridad = e.target.value;
        setTaskItem(prevTaskItem => [prioridad, prevTaskItem[1]]);
        e.target.checked = false;
        handleClickButton();
        document.querySelector(".div_radios").style.display = "none";
    };

    const cleanInput = () => {
        setTaskItem(prevTaskItem => [prevTaskItem[0], '']);
        const inputElement = document.querySelector(".div_input");
        inputElement.value = '';
    };

    const handleOnChange = (e) => {
        setTaskItem(prevTaskItem => [prevTaskItem[0], e.target.value]);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            document.querySelector(".div_radios").style.display = "flex";
        }
    };

    return (
        <div>
            <div className="d-flex justfiy-content-center div_write">
                <input
                    placeholder="Write here..."
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDown}
                    type="text"
                    name="wish"
                    id="wish"
                    className="div_input form-control"
                />
                <button
                    type="button"
                    onClick={() => {
                        const input = document.querySelector("#wish");
                        input.value ? document.querySelector(".div_radios").style.display = "flex" : ""
                    }}
                    className="div_button btn btn-primary text-nowrap btn-sm"
                >
                    Add to task list
                </button>
            </div>
            <div className="div_radios m-auto">
                <h4 className="div_radios__h4 text-center py-3">Indicates task priority</h4>
                <div className="d-grid justify-content-center">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            value="high"
                            name="flexRadioDisabled"
                            id="flexRadioDisabledHigh"
                            onChange={handlePriorityChange}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDisabledHigh">High priority</label>
                    </div>
                    <div className="form-check my-2">
                        <input
                            className="form-check-input"
                            type="radio"
                            value="medium"
                            name="flexRadioDisabled"
                            id="flexRadioDisabledMedium"
                            onChange={handlePriorityChange}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDisabledMedium">Medium priority</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            value="low"
                            name="flexRadioDisabled"
                            id="flexRadioDisabledLow"
                            onChange={handlePriorityChange}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDisabledLow">Low priority</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewTask;