import { combineReducers } from "redux";
import SortTypeReducer from "./reducer-sort-type";
import NumberEntered from "./reducer-number";
import DupReducer from "./reducer-dup";
import AllEntries from "./reducer-allEntries";

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  sortType: SortTypeReducer,
  numberEntry: NumberEntered,
  dup: DupReducer,
  allEntries: AllEntries
});

export default allReducers;
