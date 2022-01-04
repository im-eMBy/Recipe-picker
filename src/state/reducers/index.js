import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { queryReducer } from "./queryReducer";

export const reducers = combineReducers(
    {
        query: queryReducer,
        app: appReducer
    }
)