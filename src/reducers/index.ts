import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

export const allReducer = combineReducers({
  search: searchReducer,
});
