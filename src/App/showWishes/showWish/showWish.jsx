import React, { useEffect, useState } from "react";


const ShowWish = ({ wish, arrayList, index, setArrayList, setCompletedTask, ageExpiration }) => {
    const [age, setAge] = useState(0);
    const [isChecked, setIsChecked] = useState(false);


    useEffect(() => {
 
        let ageInterval;
        if (!isChecked) {

            const saveAge = localStorage.getItem("age_" + index);
            if (saveAge) {
                setAge(parseInt(saveAge));
            }
            ageInterval = setInterval(() => {
                setAge(prevAge => {
                    localStorage.setItem("age_" + index, (prevAge + 1).toString()); // Guarda como cadena
                    return prevAge + 1;
                });
            }, 1000);
        } else {
            clearInterval(ageInterval);
            setAge(prevAge => {
                prevAge = 0
                localStorage.setItem("age_" + index, 0); // Guarda como cadena
                return prevAge;
            });
        }

        return () => clearInterval(ageInterval);
    }, [isChecked]);

    const setPriority = (value, color) => {
        if (value === 'high') {
            if (color === 'red-text') {
                return getSeconds(ageExpiration[0].high);
            } else if (color === 'orange-text') {
                return (getSeconds(ageExpiration[0].high)) / 2;
            }
        } else if (value === 'medium') {
            if (color === 'red-text') {
                return getSeconds(ageExpiration[1].medium);
            } else if (color === 'orange-text') {
                return (getSeconds(ageExpiration[1].medium)) / 2;
            }
        } else {
            if (color === 'red-text') {
                return (getSeconds(ageExpiration[2].low));
            } else if (color === 'orange-text') {
                return (getSeconds(ageExpiration[2].low)) / 2;
            }
        }
    };

    const getSeconds = (timeArray) => {
        let days = timeArray[0];
        let hours = timeArray[1];
        let minutes = timeArray[2];

        return (days * (24 * 60 * 3600)) + (hours * (60 * 3600) + minutes * (60));
    };

    const handleChecking = () => {
        setIsChecked(!isChecked);
    };

    const deleteCompletedWish = () => {
        handleChecking();
        setArrayList((prevWishes) => {
            const filt = prevWishes.filter((item, itemIndex) => itemIndex !== index); // Comparar el índice del elemento actual
            localStorage.setItem("task_list", JSON.stringify(filt));
            localStorage.removeItem("age_" + index);
            if (prevWishes.length === 1) localStorage.removeItem("task_list");
            return filt;
        });

        setCompletedTask((prevTask) => {
            const completedOne = arrayList[index]; // Utiliza la referencia directa al elemento actual
            const all = [...prevTask, completedOne];
            localStorage.setItem("task_history", JSON.stringify(all));
            return all;
        });
    };
    return (
        <li className="d-flex my-3 " priority={wish[0]}>
            <div className="showWish__input d-flex justify-content-center align-items-center">
                <input valor={isChecked.toString()} className="px-3" type="checkbox" name="check" id={'checkie_' + index} onChange={handleChecking} checked={isChecked}></input>
            </div>
            <p id={'para_' + index} style={{ textDecoration: isChecked ? "line-through" : "none" }} className={`px-3 m-0 ${age >= setPriority(wish[0], 'red-text') ? 'red-text' : age >= setPriority(wish[0], 'orange-text') ? 'orange-text' : 'black-text'}`}>{wish[1]}</p>
            <div className="d-flex justify-content-center align-items-center">
                <button className="div_button btn btn-success text-nowrap btn-sm px-" id={'button_' + index} style={{ display: isChecked ? 'block' : 'none' }} onClick={deleteCompletedWish}>Completado</button>
            </div>
        </li>
    );
};

export default ShowWish;