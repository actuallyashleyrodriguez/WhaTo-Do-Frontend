import React from "react";
import Task from "./Task";
import { Route, Link } from "react-router-dom";

const Tasks = (props) => {
    return (
        <div className="task-list">{props.tasks.map(task => 
                 <li key={task.id} className="task">
                     <Link to={`/tasks/${task.id}`}>{task.attributes.description}</Link>
                     <br/></li>
                 ) }
        </div>
        
    )
}

export default Tasks