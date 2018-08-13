export default function(state = null, action) {
  if (action.type === "SORTTYPE_SELECTED") {
    state = action.payload;
  }
  return state;
}
