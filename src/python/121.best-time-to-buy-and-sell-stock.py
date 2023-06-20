# You are given an array prices where prices[i] is the price of a given stock on the ith day.
# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

from typing import List


def maxProfit(self, prices: List[int]) -> int:
    # Time: O(n)
    # Space: O(1)
    bestProfit = 0
    cheapestPrice = prices[0]
    for i in range(len(prices)):
        if prices[i] < cheapestPrice:
            cheapestPrice = prices[i]
        elif prices[i] - cheapestPrice > bestProfit:
            bestProfit = prices[i] - cheapestPrice
    return bestProfit
