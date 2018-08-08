export default function(state = null, action) {
  console.log("action payload = " + action.type);
  console.log("action payload = " + action.payload);
  switch (action.type) {
    case "NEW_CLICKED": {
      console.log("NEW_CLICKED");
      var arr = [
        {
          id: 1,
          num: 33
        },
        {
          id: 2,
          num: 12
        },
        {
          id: 3,
          num: 45
        }
      ];
      arr.push({ id: 4, num: action.payload });
      return arr;

      break;
    }
  }
  return [{ null: null }];
}
