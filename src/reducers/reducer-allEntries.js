import uuidv4 from "uuid/v4";

export default function(state = null, action) {
  switch (action.type) {
    case "NEW_CLICKED": {
      if (state === null) {
        state = [{ id: uuidv4(), num: action.payload }];
      } else {
        var clone = state.slice(0);
        clone.push({ id: uuidv4(), num: action.payload });
        state = clone;
      }
      return state;

      break;
    }
  }
  return state;
}
