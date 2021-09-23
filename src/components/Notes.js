import React from "react";

const Notes = (props) => {
    console.log(props)
    return (
        <div className="note-list">{props.notes.map(note => 
                <li key={note.id} className="note">{note.attributes.description}</li> )}
        </div>

    )
}

export default Notes;