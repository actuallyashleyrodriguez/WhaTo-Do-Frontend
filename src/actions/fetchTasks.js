export const fetchTasks = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_TASKS"});
        fetch("http://localhost:3000/api/v1/tasks")
        .then(resp => resp.json())
        .then(response => {
            dispatch({type: "FETCH_TASKS", payload: response.data})
        })
    }

 

}