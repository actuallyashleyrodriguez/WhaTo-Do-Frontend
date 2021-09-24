
export const addNote = (data) => {
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/notes", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH', 
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(response => {
            dispatch({type: "UPDATE_NOTE", payload: response.data})
        })
        
    }
}