// merge two sorted arrays

/* 

function takes two sorted arrays and merges

|| input & output

  ([1, 3, 6, 8], [2 7, 9]) => [1, 2, 3, 6, 7, 8, 9];

// psuedo
initialize left and right pointer variables to 0th index

if element at left index or right index === undefined
  push remainder of opposite array to new merged array
compare element at left index to element at right index
  push smallest element to new array and increment respective pointer by one




foreach shorter of 2 arrays (el, i1, arr)
  while (arr2[i2] < el) {
    merged.push(arr2[i2)];]
    i2++
  }

  merged.push(el);

*/

const mergeSorted = (array1, array2) => {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  const merge = () => {
    if (array1[leftIndex] === undefined) {
      merged = merged.concat(array2.slice(rightIndex));
      return;
    } else if (array2[rightIndex] === undefined) { 
      merged = merged.concat(array1.slice(leftIndex));
      return;
    }

    if (array1[leftIndex] <= array2[rightIndex]) {
      merged.push(array1[leftIndex]);
      leftIndex++;
      merge();
    } else {
      merged.push(array2[rightIndex]);
      rightIndex++;
      merge();
    }
  }

  merge();
  return merged;
}

const mergeSortedRefactor = (array1, array2) => {
  const merged = [];

  array1.forEach((el) => {
    while(array2[0] <= el) {
      merged.push(array2.shift());
    }
    merged.push(el);
  });

  if (array2.length > 0) {
    merged.push(...array2);
  }

  return merged;
}

console.log(mergeSorted([1, 3, 6, 8], [2, 7, 9]));
console.log(mergeSortedRefactor([1, 3, 6, 8], [2, 7, 9]));
console.log(mergeSortedRefactor([6, 8], [2, 7, 9]));