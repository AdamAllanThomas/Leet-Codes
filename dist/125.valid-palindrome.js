"use strict";
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
function isPalindrome(x) {
    // O(n)
    const letters = x.toLowerCase().replace(/[^a-z0-9]/g, "");
    const iters = Math.floor(letters.length / 2) + 1;
    let p1 = 0, p2 = letters.length - 1;
    for (let i = 1; i < iters; i++) {
        if (letters[p1] !== letters[p2]) {
            return false;
        }
        else {
            p1++;
            p2--;
        }
    }
    return true;
}
