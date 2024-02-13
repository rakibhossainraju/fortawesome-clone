import { combineReducers } from "redux";
import { appDataReducer } from "./app-data/app-data.reducer";

export const rootReducer = combineReducers({
  appData: appDataReducer,
});
