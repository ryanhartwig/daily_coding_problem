/*


Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given a 32-bit integer, return the number with its bits reversed.

For example, given the binary number 1111 0000 1111 0000 1111 0000 1111 0000, return 0000 1111 0000 1111 0000 1111 0000 1111

*/


(() => {

  const reverseBits = (n: number) => ~n;

  console.log(9);
  console.log(reverseBits(9)); //-10
})()