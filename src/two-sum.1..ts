function twoSum(nums: number[], target: number): number[] {
  // Would be faster to use a hash map. this is On^2
  const sortedNums: number[] = nums.slice().sort((a, b) => a - b);
  let start = 0,
    end = sortedNums.length - 1;
  while (start < end) {
    let sum = sortedNums[start] + sortedNums[end];
    if (sum === target) {
      return [
        nums.indexOf(sortedNums[start]),
        nums.lastIndexOf(sortedNums[end]),
      ];
    } else if (sum < target) start++;
    else end--;
  }
  return [];
}
