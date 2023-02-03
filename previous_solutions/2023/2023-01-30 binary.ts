(() => {

  /* 


  Good morning! Here's your coding interview problem for today.

  This problem was asked by Cisco.

  Given an unsigned 8-bit integer, swap its even and odd bits. The 1st and 2nd bit should be swapped, the 3rd and 4th bit should be swapped, and so on.

  For example, 10101010 should be 01010101. 11100010 should be 11010001.

  Bonus: Can you do this in one line?
  
  */

  const swap = (n: number) => {
    let left = n;
    left <<= 1;
    let right = n;
    right >>= 1;

    console.log(left)
    console.log(right)

    // 11000100 = left
    // 01110001 = right
    
    return n >> 1;
  }
 

  console.log(parseInt('10101010', 2)); // 170
  console.log(parseInt('01010101', 2)); // 85
  
  console.log(swap(170));
  
})()

// solution
function swapBits( x: number)
{
     
    // Get all even bits of x
    let even_bits = x & 0xAAAAAAAA;
 
    // Get all odd bits of x
    let odd_bits = x & 0x55555555;
     
    // Right shift even bits
    even_bits >>= 1;
     
    // Left shift odd bits
    odd_bits <<= 1;
 
    // Combine even and odd bits
    return (even_bits | odd_bits);
}