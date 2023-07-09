import { createStore, combineReducers } from "redux";
import { userListReducer } from "./userListReducer";
import { isUserActiveReducer } from "./isUserActiveReducer";
import { currentUserReducer } from "./currentUserReducer";
import { prevListItemReducer } from "./prevListItemReducer";

const rootReducer = combineReducers({
  userListReducer,
  isUserActiveReducer,
  currentUserReducer,
  prevListItemReducer
});

export const store = createStore(rootReducer);
