# `Given an integer array nums, return true if any value appears at least twice in the array,
#  and return false if every element is distinct`;


def containsDuplicate(self, nums) -> bool:
    # O(n) time complexity
    # O(n) space complexity
    return len(nums) != len(set(nums))
