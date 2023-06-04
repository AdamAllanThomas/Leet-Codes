"use strict";
`Given an integer array nums, return true if any value appears at least twice in the array,
 and return false if every element is distinct`;
function containsDuplicate(nums) {
    // O(n)
    let n = new Set();
    for (const number of nums) {
        if (n.has(number))
            return true;
        else
            n.add(number);
    }
    return false;
}
