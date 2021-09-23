import React from "react";
import { Redirect } from "react-router-dom";

const Task = (props) => {
    let task = props.tasks[props.match.params.id - 1]

    return(
        <ul>
             <li>
                Task: {task ? task.attributes.description : null}
            </li>
             <li>
                Task Category: {task ? task.attributes.category : null}
            </li>
            <li>
                Task Status: {task ? task.attributes.status : null}
            </li>
            <li>
            Due Date: {task ? task.attributes.date : null}
            </li>
            {task && task.attributes.notes.length > 0 ? <li>Notes: {task.attributes.notes[0].description}</li> : null}
        
        </ul>
    )

}

export default Task