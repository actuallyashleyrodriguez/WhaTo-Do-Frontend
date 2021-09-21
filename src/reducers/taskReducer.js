export default function taskReducer(state = {tasks: []}, action) {

    switch(action.type)  {
        
        case "FETCH_ACCOUNTS":
            return {tasks: action.payload}
        default:
            return state;
    }

    

}