import React from "react";
import { Redirect } from "react-router-dom";

const Note = (props) => {
    let note = props.notes[props.match.params.id - 1]
    //let task = props.tasks[note.attributes.task_id -1]
    console.log(props.tasks)

    return(
        <ul>
             <li>
                Note: {note ? note.attributes.description : null}
            </li>

            {note && note.attributes.task_id ? <li>Associated with Task: {props.tasks[note.attributes.task_id -1].attributes.description}</li> : null}
        
        </ul>
    )

}

export default Note