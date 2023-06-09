`You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`;

function maxProfit(prices: number[]): number {
  // O(n)
  let bestProfit: number = 0,
    cheapestPrice: number = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < cheapestPrice) {
      cheapestPrice = prices[i];
    } else if (prices[i] - cheapestPrice > bestProfit) {
      bestProfit = prices[i] - cheapestPrice;
    }
  }
  return bestProfit;
}
