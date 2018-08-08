export default function(state = null, action) {
  switch (action.type) {
    case "DUP_SELECTED":
      return action.payload;
      break;
  }
  return state;
}
