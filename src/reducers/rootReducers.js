import { combineReducers } from "redux";
import noteReducer from './noteReducer';
import taskReducer from './taskReducer';

export default combineReducers({noteReducer, taskReducer})
