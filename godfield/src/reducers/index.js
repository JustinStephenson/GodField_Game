import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import cardReducer from "./cardReducer";

export default combineReducers({
    playerReducer: playerReducer,
    cardReducer: cardReducer,
});
