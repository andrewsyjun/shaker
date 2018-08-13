export default function(state = 1, action) {
  switch (action.type) {
    case "DUP_SELECTED":
      return action.payload;
  }
  return state;
}
