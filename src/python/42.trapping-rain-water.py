# Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        # Time: O(n)
        # Space: O(1)
        if not height:
            return 0
        n = len(height)
        left, right = 0, n - 1
        left_max, right_max = height[left], height[right]
        water = 0
        while left < right:
            if height[left] < height[right]:
                left_max = max(left_max, height[left])
                water += left_max - height[left]
                left += 1
            else:
                right_max = max(right_max, height[right])
                water += right_max - height[right]
                right -= 1
        return water
