`Given an integer array nums sorted in non-decreasing order, return an array of the squares 
of each number sorted in non-decreasing order.`;

function sortedSquares(nums: number[]): number[] {
  // O(n log n)
  let acc: number[] = [];
  for (const number of nums) {
    acc.push(number * number);
  }
  return acc.sort((a, b) => a - b);
}
