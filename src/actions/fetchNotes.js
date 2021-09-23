export const fetchNotes = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_NOTES"});
        fetch("http://localhost:3000/api/v1/notes")
        .then(resp => resp.json())
        .then(response => {
            dispatch({type: "FETCH_NOTES", payload: response.data})
        })
    }

 

}