import { combineReducers } from "redux";
import { queryReducer } from "./queryReducer";

export const reducers = combineReducers(
    {
        query: queryReducer
    }
)