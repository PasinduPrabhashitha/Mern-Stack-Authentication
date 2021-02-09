import { combineReducers } from "redux";
import { userRegisterReducer, userLoginReducer } from "./authReducers";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
});

export default rootReducer;
