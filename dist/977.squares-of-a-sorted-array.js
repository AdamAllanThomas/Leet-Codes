"use strict";
`Given an integer array nums sorted in non-decreasing order, return an array of the squares 
of each number sorted in non-decreasing order.`;
function sortedSquares(nums) {
    // O(n log n)
    let acc = [];
    for (const number of nums) {
        acc.push(number * number);
    }
    return acc.sort((a, b) => a - b);
}
