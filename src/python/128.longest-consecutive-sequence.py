# Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
# You must write an algorithm that runs in O(n) time.

from typing import List


def longestConsecutive(nums: List[int]) -> int:
    # Time: O(n)
    longest = 0
    numSet = set(nums)
    for num in nums:
        if num - 1 not in numSet:
            x = 1
            while num + x in numSet:
                x += 1
            longest = max(longest, x)
    return longest
