import {uuid} from 'uuid';

export default function noteReducer(state = {notes:[]}, action) {
    switch(action.type)  {
        
        case "FETCH_NOTES":
            return {notes: action.payload}
        case "ADD_NOTE":
            return {...state, notes:[...state.notes, action.payload] }
        case "ADD_TASK":
            return [...state, { note: action.task.note, id: uuid() }];
        default:
            return state;
    }

    

}