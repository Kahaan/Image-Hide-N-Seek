import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers/root_reducer";
import thunk from "../middleware/thunk_middleware";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) =>
  createStore(
    RootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore;
