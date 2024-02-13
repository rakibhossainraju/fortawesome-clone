import { compose, legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleware = [process.env.NODE_ENV === "development" && logger];

const composedEnhancers = compose(applyMiddleware(...middleware));

export const store = legacy_createStore(
  rootReducer,
  undefined,
  composedEnhancers,
);
