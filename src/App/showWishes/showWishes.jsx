import React, { useEffect, useState } from "react";
import ShowWish from "./showWish/index";

const ShowWishes = ({ arrayList, setArrayList, setCompletedTask, ageExpiration }) => {

    useEffect(() => {
        const storedWishes = JSON.parse(localStorage.getItem('task_list'));
        if (storedWishes) {
            setArrayList(storedWishes);
        }
    }, [setArrayList]);

    if (arrayList.length > 0) {
        return (
            <>
                <div className="div_showWishes">
                    <ul className="showWishes_ul my-5">
                        {arrayList.map((wish, index) => (
                            <ShowWish
                                key={index} // Agrega la key para identificar cada elemento de forma única
                                ageExpiration={ageExpiration}
                                arrayList={arrayList}
                                setArrayList={setArrayList}
                                setCompletedTask={setCompletedTask}
                                wish={wish}
                                index={index}
                            />
                        ))}
                    </ul>
                </div>
            </>
        );
    }
    return (
        <>
            <h5 className="showWishes_h5 py-3 text-center text-white">Aún no has añadido nada a tu lista de deseos</h5>
        </>
    );
};

export default ShowWishes;