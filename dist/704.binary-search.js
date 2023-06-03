"use strict";
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.
function search(nums, target) {
    // O(log n)
    let [low, high] = [0, nums.length - 1];
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] === target)
            return mid;
        else if (nums[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}
