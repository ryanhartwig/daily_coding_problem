/* 


Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given a pivot x, and a list lst, partition the list into three parts.

The first part contains all elements in lst that are less than x
The second part contains all elements in lst that are equal to x
The third part contains all elements in lst that are larger than x
Ordering within a part can be arbitrary.

For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one partition may be [9, 3, 5, 10, 10, 12, 14].

*/

(() => {

  const partitions = (arr: number[], pivot: number): number[] => {
    const LT: number[] = [];
    const ET: number[] = [];
    const GT: number[] = [];

    arr.forEach(n => {
      if (n < pivot) LT.push(n);
      else if (n === pivot) ET.push(n);
      else if (n > pivot) GT.push(n);
    });

    return [...LT, ...ET, ...GT];
  }


  // (referenced chatGPT)
  const partitionsInPlace = (arr: number[], pivot: number): number[] => {
    let smaller = 0;
    let equal = 0;
    let larger = arr.length - 1;

    while (equal < larger) {
      if (arr[equal] < pivot) {
        [arr[equal], arr[smaller]] = [arr[smaller], arr[equal]];
        equal++;
        smaller++;
      } else if (arr[equal] === pivot) {
        equal++;
      } else {
        [arr[equal], arr[larger]] = [arr[larger], arr[equal]];
        larger--;
      }
    }

    return arr;
  }

  console.log(partitions([9,12,3,5,14,10,10], 10))
  console.log(partitionsInPlace([9,12,3,5,14,10,10], 10))
  
})()

