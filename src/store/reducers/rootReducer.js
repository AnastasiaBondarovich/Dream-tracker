import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import goalsReducer from "./goalsReducer";

const rootReducer = combineReducers({
  usersReducer,
  goalsReducer
})

export default rootReducer;