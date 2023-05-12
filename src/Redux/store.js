import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as UserReducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ UserReducer });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
