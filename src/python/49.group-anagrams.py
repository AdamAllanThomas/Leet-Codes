# Given an array of strings strs, group the anagrams together. You can return the answer in any order.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
from collections import defaultdict
from typing import List


def groupAnagrams(strs: List[str]) -> List[List[str]]:
    # Time: O(NMlogM)
    # Space: O(NM)
    # N is the total number of strings in the input list strs.
    # M is the maximum length of a string in strs.
    groups: defaultdict[str, List[str]] = defaultdict(list)
    for word in strs:
        sorted_word = "".join(sorted(word))
        groups[sorted_word].append(word)
    return list(groups.values())
