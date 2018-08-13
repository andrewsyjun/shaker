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
      var arr = new Array(500);
      var rNum;
      for (var i = 0; i < 500; i++) {
        rNum = Math.floor(Math.random() * 5000 + 1);
        arr[i] = { id: uuidv4(), num: rNum };
      }
      state = arr;
      /*
      state = [
        { id: uuidv4(), num: 2 },
        { id: uuidv4(), num: 37 },
        { id: uuidv4(), num: 13 },
        { id: uuidv4(), num: 39 },
        { id: uuidv4(), num: 37 }
        //{ id: uuidv4(), num: 31 },
        //{ id: uuidv4(), num: 44 },
        //{ id: uuidv4(), num: 55 },
        //{ id: uuidv4(), num: 20 }
      ];
      
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
    case "INSERT_CLICKED": {
      console.log("INSERT_CLICKED");
      return state;
    }
    case "SORTTYPE_SELECTED": {
      switch (action.payload.sortType) {
        case "QUICK_SORT": {
          if (state === null) return state;
          //swap("initial state", state, 0, 0);
          quickSort(state);
          return state;
        }
        case "BUBBLE_SORT": {
          return bubbleSort(state);
        }
        case "MERGE_SORT": {
          state = mergeSort(state);
          return state;
        }
        case "HEAP_SORT": {
          return heapSort(state);
        }
        case "INSERTION_SORT": {
          return insertionSort(state);
        }
      }

      return state;
    }
  }
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
  var newLen = arr1.length + arr2.length;
  var mergedArray = new Array(newLen);

  var len1 = arr1.length;
  var len2 = arr2.length;
  var i = 0,
    x = 0,
    j = 0,
    k = 0;
  while (i < len1) {
    while (j < len2) {
      if (arr1[i].num <= arr2[j].num) {
        mergedArray[k++] = arr1[i++];

        break;
      } else {
        mergedArray[k++] = arr2[j++];
      }
    }

    if (j >= len2) {
      mergedArray[k++] = arr1[i++];
    }
  }

  //if (len1 < len2) {
  while (j < len2) {
    mergedArray[k++] = arr2[j++];
  }
  //}

  return mergedArray;
}

function heapSort(state) {
  console.log("do heap sort");
  return state;
}

function insertionSort(state) {
  console.log("do insertion sort");
  return state;
}
