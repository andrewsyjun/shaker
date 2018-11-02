import uuidv4 from "uuid/v4";
import allReducers from "./index";

export default function(state = null, action) {
  switch (action.type) {
    case "NEW_CLICKED": {
      if (state === null) {
        state = [{ id: uuidv4(), num: action.payload.newNumEntry }];
      } else {
        var clone = state.slice(0);
        clone.push({ id: uuidv4(), num: action.payload.newNumEntry });
        state = clone;
      }
      return state;
    }
    case "FIND_CLICKED": {
      console.log("FIND_CLICKED");
      quickSort(state);
      return state;
    }
    case "FILL_CLICKED": {
      var arr = new Array(6);
      var rNum;
      for (var i = 0; i < 6; i++) {
        rNum = Math.floor(Math.random() * 25 + 1);
        arr[i] = { id: uuidv4(), num: rNum };
      }
      state = arr;

      /*
      state = [
        { id: uuidv4(), num: 41 },
        { id: uuidv4(), num: 5 },
        { id: uuidv4(), num: 73 },
        { id: uuidv4(), num: 69 },
        { id: uuidv4(), num: 79 },
        { id: uuidv4(), num: 76 },
        { id: uuidv4(), num: 18 }
        //{ id: uuidv4(), num: 55 },
        //{ id: uuidv4(), num: 20 }
      ];
      //this is a test
      //(9, 18, 9, 9, 28, 27, 12)
      state = [
        { id: uuidv4(), num: 9 },
        { id: uuidv4(), num: 18 },
        { id: uuidv4(), num: 9 },
        { id: uuidv4(), num: 9 },
        { id: uuidv4(), num: 28 },
        { id: uuidv4(), num: 27 },
        { id: uuidv4(), num: 12 }
      ];
      */

      return state;
    }
    case "DELETE_CLICKED": {
      console.log("DELETE_CLICKED");
      return state;
    }
    case "INSERTION_CLICKED": {
      insertionSort(state);
      return state;
    }
    case "SORTTYPE_SELECTED": {
      switch (action.payload.sortType) {
        case "QUICK_SORT": {
          if (state === null) return state;
          //swap("initial state", state, 0, 0);
          console.time("quickSort");
          quickSort(state);
          console.timeEnd("quickSort");
          return state;
        }
        case "BUBBLE_SORT": {
          console.time("bubbleSort");
          state = bubbleSort(state);
          console.timeEnd("bubbleSort");
          return state;
        }
        case "MERGE_SORT": {
          console.time("mergeSort");
          state = mergeSort(state);
          console.timeEnd("mergeSort");
          return state;
        }
        case "HEAP_SORT": {
          return heapSort(state);
        }
        case "INSERTION_SORT": {
          console.time("insertionSort");
          state = insertionSort(state);
          console.timeEnd("insertionSort");
          return state;
        }
        case "REVERSE_ARRAY": {
          return reverseArray(state);
        }
        case "REVERSE_STRING": {
          state = [{ id: "hi", num: "hello world" }];
          return reverseStr(state);
        }
      }

      return state;
    }
  }
  return state;
}

function reverseArray(arr) {
  console.log("REVERSE ARRAY called");
  var len = arr.length;
  var half = Math.floor(len / 2);
  var even = false;
  //check if there are odd or even number of elements
  for (var i = 0; i < half; i++) {
    var tmp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = tmp;
  }
  return arr;
}

function reverseStr(state) {
  console.log("REVERSE STRING called");
  var str = state[0].num;
  console.log(str);
  var reverseStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverseStr += str.charAt(i);
  }

  state[0].num = reverseStr;
  return state;
}

function quickSort(arr) {
  partition(arr, 0, 1, arr.length - 1);
}

function partition(arr, pivot, lI, rI) {
  var leftIndex = lI;
  var rightIndex = rI;
  if (leftIndex > rightIndex) {
    return;
  }

  if (leftIndex === rightIndex) {
    //handle a case when there are only two elements to consider
    if (arr[pivot].num > arr[leftIndex].num) {
      swap("two elements ", arr, pivot, leftIndex);
    }
    return;
  }

  var x = 0;
  //console.log("moving right: leftIndex = " + leftIndex + "; rightIndex = " + rightIndex);
  while (rightIndex - leftIndex > 0) {
    /*
    x++;
    if (x > 250) {
      console.log("something went wrong; x = " + x);

      console.log(
        "moving right: leftIndex = " +
          leftIndex +
          "; rightIndex = " +
          rightIndex
      );
      return;
    }
    */
    //console.log("leftIndex = " + leftIndex + "; rightIndex = " + rightIndex);
    while (leftIndex <= rightIndex && arr[pivot].num > arr[leftIndex].num) {
      if (leftIndex <= rightIndex) {
        leftIndex++;
        /*
        console.log(
          "moving right: leftIndex = " +
            leftIndex +
            "; rightIndex = " +
            rightIndex
        );
        */
      } else {
        break;
      }
    }

    //console.log("moving left: leftIndex = " + leftIndex + "; rightIndex = " + rightIndex);
    while (
      pivot <= rightIndex &&
      leftIndex <= rightIndex &&
      arr[pivot].num <= arr[rightIndex].num
    ) {
      /*
      console.log(
        "moving left: pivot = " +
          pivot +
          "; arr[" +
          pivot +
          "] = " +
          arr[pivot].num +
          "; arr[" +
          rightIndex +
          "].num = " +
          arr[rightIndex].num
      );
      */
      if (rightIndex >= pivot) {
        rightIndex--;
        /*
        console.log(
          "moving left: leftIndex = " +
            leftIndex +
            "; rightIndex = " +
            rightIndex
        );
        */
      } else {
        break;
      }
    }

    if (leftIndex <= rightIndex) {
      //swap leftIndex and rightIndex and loop again
      swap("swap", arr, leftIndex, rightIndex);
    }
  }

  //repivot
  swap("repivot", arr, pivot, rightIndex);
  /*
  console.log(
    "partition(arr, " +
      pivot +
      ", " +
      (pivot + 1) +
      ", " +
      (rightIndex - 1) +
      ")"
  );
  */

  partition(arr, pivot, pivot + 1, rightIndex - 1);
  /*
  console.log(
    "partition(arr, " +
      leftIndex +
      ", " +
      (leftIndex + 1) +
      ", " +
      rightIndex +
      ")"
  );
  */
  partition(arr, leftIndex, leftIndex + 1, rI);
}

function swap(action, arr, lI, rI) {
  /*
  console.log(action + "(" + lI + ", " + rI + ")");

  var msg = "before " + action;
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      msg += "(" + arr[i].num + ", ";
    } else if (i === arr.length - 1) {
      msg += arr[arr.length - 1].num + ")";
    } else {
      msg += arr[i].num + ", ";
    }
  }
  console.log(msg);
  msg = "";
  */

  var tmp = arr[lI];
  arr[lI] = arr[rI];
  arr[rI] = tmp;
  /*
  msg = "after " + action;
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      msg += "(" + arr[i].num + ", ";
    } else if (i === arr.length - 1) {
      msg += arr[arr.length - 1].num + ")";
    } else {
      msg += arr[i].num + ", ";
    }
  }
  console.log(msg);
  */
}

function bubbleSort(state) {
  let len = state.length;
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (state[i].num > state[j].num) {
        var tmp = state[j];
        state[j] = state[i];
        state[i] = tmp;
      }
    }
  }

  return state;
}

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  var arr1Len = Math.floor(arr.length / 2);

  var arr1, arr2;

  var arr1 = mergeSort(arr.slice(0, arr1Len));
  var arr2 = mergeSort(arr.slice(arr1Len, arr.length));
  var m = merge(arr1, arr2);

  return m;
}

function merge(arr1, arr2) {
  let x = 0;
  let i = (j = 0);
  let newArr = [];
  let len1 = arr1.length;
  let len2 = arr2.length;
  console.log("len1, len2 = " + len1 + ", " + len2);
  while (i < len1) {
    x++;
    if (x > 10) {
      console.log("problem x, i , j = " + x + ", " + i + ", " + j);
      return [];
    }
    while (j < len2) {
      x++;
      if (arr1[i] < arr2[j]) {
        newArr.push(arr1[i++]);
        break;
      } else {
        newArr.push(arr2[j++]);
      }
    }

    console.log("x, i , j = " + x + ", " + i + ", " + j);
    if (j >= len2) {
      newArr.push(arr1[i++]);
    }
  }

  while (j < len2) {
    newArr.push(arr2[j++]);
  }

  return newArr;
}

function heapSort(state) {
  console.log("do heap sort");
  return state;
}

function insertionSort(arr) {
  var tmp;
  //var i = 4;
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      //find a place to insert the next number
      var found = false;
      if (arr[j].num > arr[i].num) {
        found = true;
        /*
        console.log(
          "arr[" +
            j +
            "].num = " +
            arr[j].num +
            " >  arr[" +
            i +
            "].num = " +
            arr[i].num
        );
        */

        tmp = arr[j];
        arr[j] = arr[i];
        break;
      }
    }

    for (var k = i; k > j + 1; k--) {
      arr[k] = arr[k - 1];
    }

    if (found) {
      arr[j + 1] = tmp;
      /*
      var msg = "";
      for (var idx = 0; idx < arr.length; idx++) {
        if (idx === 0) {
          msg += "(" + arr[idx].num + ", ";
        } else if (idx === arr.length - 1) {
          msg += arr[arr.length - 1].num + ")";
        } else {
          msg += arr[idx].num + ", ";
        }
      }
      console.log(msg);
      */
    }
  }
  return arr;
}
