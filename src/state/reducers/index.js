import { combineReducers } from "redux";
import { dietInfoReducer } from "./dietInfoReducer";

export const reducers = combineReducers(
    {
        dietInfo: dietInfoReducer
    }
)