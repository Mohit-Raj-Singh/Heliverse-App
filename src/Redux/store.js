// import { legacy_createStore } from "redux";
// import reducer from "./reducer";

// const store = legacy_createStore(reducer);

// export {store};



// import thunk from "redux-thunk";
// import { reducer as productReducer} from "./BeutyProducts/reducer"
// import {reducer as MensProductReducer} from "./Products/reducer";
// import { reducer as LoginReducer } from "./LoginAuth/reducer";
// import { reducer as SignupReducer } from "./SignupAuth/reducer";
// import { reducer as CartReducer} from "./Cart/reducer"

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as UserReducer} from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ UserReducer });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
