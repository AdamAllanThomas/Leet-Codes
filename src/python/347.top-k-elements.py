# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

from collections import Counter
import heapq
from typing import List


def topKFrequent(nums: List[int], k: int) -> List[int]:
    # Time: O(N log k)
    count = Counter(nums)
    heap = [(-freq, num) for num, freq in count.items()]
    heapq.heapify(heap)
    top_k = [heapq.heappop(heap)[1] for _ in range(k)]
    return top_k
