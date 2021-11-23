import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import goalsReducer from "./goalsReducer";
import wishBoardReducer from "./wishBoardReducer";

const rootReducer = combineReducers({
  usersReducer,
  goalsReducer,
  wishBoardReducer
})

export default rootReducer;