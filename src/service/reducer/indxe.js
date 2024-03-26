import { combineReducers } from "redux";
import { authenticationReducer } from "./authentication";

const appReducer = combineReducers({
  authenticationReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
