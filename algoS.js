// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
//var arraySize = 40;

// // Case 2 - Large set of Numbers
var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Selection Sort
// ================================================

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function selectionSort(items) {
    for(var i = 0; i < items.length; i++) {
      var k = i;
      for(var j = i + 1; j < items.length; j++) {
        if(items[j] < items[k]) {
          k = j;
        }
      }
      if(i !== k) {
        swap(items, i, k);
      }
    }
    return items;
  }

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));
