export default function(state = false, action) {
  switch (action.type) {
    case "OPEN_NEW_MODAL":
      return !state;
  }
  return state;
}
