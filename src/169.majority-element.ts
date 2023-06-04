function majorityElement(nums: number[]): number {
  // O(n log n)
  const sortedNums = nums.sort((a, b) => a - b);
  return sortedNums[Math.floor(nums.length / 2)];
}
