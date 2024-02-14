import { combineReducers } from "redux";
import { appDataReducer } from "./app-data/app-data.reducer";
import { dynamicLayoutReducer } from "./dynamic-layout/dynamic-layout.reducer.js";

export const rootReducer = combineReducers({
  appData: appDataReducer,
  dynamicLayout: dynamicLayoutReducer,
});
