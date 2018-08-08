export default function(state = null, action) {
  switch (action.type) {
    case "SORT_TYPE_SELECTED":
      return action.payload;
      break;
  }
  return state;
}
