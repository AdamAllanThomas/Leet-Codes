"use strict";
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
function twoSum(nums, target) {
    // Would be faster to use a hash map. this is On^2
    const sortedNums = nums.slice().sort((a, b) => a - b);
    let start = 0, end = sortedNums.length - 1;
    while (start < end) {
        let sum = sortedNums[start] + sortedNums[end];
        if (sum === target) {
            return [
                nums.indexOf(sortedNums[start]),
                nums.lastIndexOf(sortedNums[end]),
            ];
        }
        else if (sum < target)
            start++;
        else
            end--;
    }
    return [];
}
