import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

const reducers = {
  AuthReducer,
};

export const rootReducer = combineReducers(reducers);
