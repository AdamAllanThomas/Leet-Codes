`Given an integer array nums, move all 0's to the end of it while maintaining the 
relative order of the non-zero elements. Note that you must do this in-place without 
making a copy of the array.`;

function moveZeroes(nums: number[]): void {
  // O(n)
  let insertPos = 0;
  for (const num of nums) if (num !== 0) nums[insertPos++] = num;
  while (insertPos < nums.length) nums[insertPos++] = 0;
}
