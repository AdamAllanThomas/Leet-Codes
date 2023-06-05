"use strict";
`Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times.
 You may assume that the majority element always exists in the array.`;
function majorityElement(nums) {
    // O(n log n)
    const sortedNums = nums.sort((a, b) => a - b);
    return sortedNums[Math.floor(nums.length / 2)];
}
