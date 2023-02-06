(() => {

  const shuffle = (nums: number[], n: number): number[] => {
    const shuffled: number[] = [];
  
    let right = nums.length / 2;
    for (let i = 0; i < nums.length / 2; i++) {
      shuffled.push(nums[i], nums[right++]);
    }

    return shuffled;
  }

  console.log(shuffle([2,5,1,3,4,7], 3))
  
  
})()

