import React from "react";
import Task from "./Task";

const Tasks = (props) => {
    return (
        <div className="task-list">{props.tasks.map(task => 
                 <div key={task.id} className="task"><Task task={task}/></div>
                 )}
        </div>
        
    )
}

export default Tasks