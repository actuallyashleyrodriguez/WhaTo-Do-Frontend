import React from "react";

const Notes = (props) => {
    console.log(props)
    return (
        <div className="note-list">{props.notes.map(note => 
                <li key={note.id} className="note">{note.attributes.description}  {note.attributes.task_id ? `-Affiliated with task # ${note.attributes.task_id}` : null}</li>  
                )}
        </div>

    )
}

export default Notes;