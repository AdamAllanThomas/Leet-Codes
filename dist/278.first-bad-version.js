"use strict";
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
var solution = function (isBadVersion) {
    // O(log n)
    return function (n) {
        let [low, high] = [0, n];
        while (low < high) {
            let mid = Math.floor(low + (high - low) / 2);
            if (isBadVersion(mid))
                high = mid;
            else
                low = mid + 1;
        }
        return low;
    };
};
