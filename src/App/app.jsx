import React, { useState } from "react";
import NewTask from "./WriteNewTask/newTask.js";
import ShowWishes from "./showWishes/showWishes.js";
import SideBarComponent from "./History/styledHistoryComponent.js";

const App = () => {
    const [taskItem, setTaskItem] = useState(["", ""]);
    const [arrayList, setArrayList] = useState([]);
    const [completedTask, setCompletedTask] = useState([]);
    const [ageExpiration, setAgeExpiration] = useState([
        { high: [0, 0, 1] },
        { medium: [0, 0, 2] },
        { low: [0, 0, 3] }
    ]);

    return (
        <>
            <div className="main_ col-md-8 d-flex flex-column align-items-center py-3">
                <div className="div__showWishes">
                    <NewTask setTaskItem={setTaskItem} setArrayList={setArrayList} />
                </div>
                <ShowWishes arrayList={arrayList} setArrayList={setArrayList} setCompletedTask={setCompletedTask} completedTask={completedTask} ageExpiration={ageExpiration} />
            </div>
            <div>
                <SideBarComponent setCompletedTask={setCompletedTask} completedTask={completedTask} setAgeExpiration={setAgeExpiration} ageExpiration={ageExpiration} />
            </div>
        </>
    );
}

export default App;