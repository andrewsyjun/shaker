export default function(state = null, action) {
  switch (action.type) {
    case "NUMBER_ENTERED":
      return action.payload;
      break;
  }
  return state;
}
