"use strict";
`Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 typically using all the original letters exactly once.`;
function isAnagram(s, t) {
    // O(n log n)
    if (s.split("").sort().toString() === t.split("").sort().toString())
        return true;
    else
        return false;
}
