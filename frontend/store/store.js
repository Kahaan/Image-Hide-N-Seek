import { createStore } from "redux";
import RootReducer from "../reducers/root_reducer";

const configureStore = (defaultState = {}) => createStore(RootReducer);

export default configureStore;
