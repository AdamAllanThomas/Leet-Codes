`Given a string s, find the length of the longest substring without repeating characters.`;

function lengthOfLongestSubstring(s: string): number {
  let letters = new Set<string>();
  let left = 0,
    right = 0,
    longest = 0;
  while (right < s.length) {
    if (!letters.has(s[right])) {
      letters.add(s[right]);
      longest = Math.max(longest, letters.size);
      right++;
    } else {
      letters.delete(s[left]);
      left++;
    }
  }
  return longest;
}
