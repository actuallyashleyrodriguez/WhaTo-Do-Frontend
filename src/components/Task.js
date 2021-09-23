import React from "react";

const Task = (props) => {
    console.log(props)
    return(
        <li>
            {props.task.attributes.description}
        </li>
    )

}

export default Task