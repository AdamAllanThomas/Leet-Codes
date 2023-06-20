# Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
# You must write an algorithm that runs in O(n) time and without using the division operation.
from typing import List


def productExceptSelf(nums: List[int]) -> List[int]:
    # Time: O(n)
    n = len(nums)
    left_products = [0] * n
    right_products = [0] * n
    output = [0] * n
    left_products[0] = 1
    for i in range(1, n):
        left_products[i] = nums[i - 1] * left_products[i - 1]
    right_products[n - 1] = 1
    for i in reversed(range(n - 1)):
        right_products[i] = nums[i + 1] * right_products[i + 1]
    for i in range(n):
        output[i] = left_products[i] * right_products[i]
    return output
