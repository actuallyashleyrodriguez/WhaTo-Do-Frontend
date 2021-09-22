import React from "react";

const Tasks = (props) => {
    return (
        <div className="task-list">{props.tasks.map(task => 
             <ul>
                 <li key={task.id} className="task">{task.attributes.category} - {task.attributes.status}  
                 <ul>
                     <li>{task.attributes.description}</li>
                </ul>
                </li>
            </ul>)}
        </div>
        
    )
}

export default Tasks