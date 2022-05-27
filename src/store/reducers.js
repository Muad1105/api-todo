import { combineReducers } from "redux";
import ActionBtnReducer from "../plugins/action-button/redux/reducer";
// import UserReducer from "../containers/user/redux/reducer";
const rootReducer = combineReducers({
  actionBtn: ActionBtnReducer,
  // userReducer: UserReducer,
  // all reducers
});

export default rootReducer;
