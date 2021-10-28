import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import videoReducer from "./videoReducer";

export const allReducer = combineReducers({
  search: searchReducer,
  video: videoReducer,
});
