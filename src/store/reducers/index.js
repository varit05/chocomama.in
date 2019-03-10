import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import { firebaseReducer } from "react-redux-firebase";
import commonReducer from "./common.reducers";

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
  firebase: firebaseReducer
});

export default rootReducer;
