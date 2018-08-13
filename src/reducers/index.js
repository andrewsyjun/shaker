import { combineReducers } from "redux";
import SortTypeReducer from "./reducer-sort-type";
import NumberEntered from "./reducer-number";
import DupReducer from "./reducer-dup";
import AllEntries from "./reducer-allEntries";
import OpenNewModal from "./reducer-openNewModal";

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  sortType: SortTypeReducer,
  numberEntry: NumberEntered,
  dupsAllowed: DupReducer,
  allEntries: AllEntries,
  open: OpenNewModal
});

export default allReducers;
