# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
# it reads the same forward and backward. Alphanumeric characters include letters and numbers.
# Given a string s, return true if it is a palindrome, or false otherwise.


def isPalindrome(s: str) -> bool:
    # Time: O(n)
    strippedS = "".join(c.lower() for c in s if c.isalnum())
    if len(strippedS) == 0:
        return True
    p2 = len(strippedS) - 1
    for p1 in range(len(strippedS)):
        if strippedS[p1] != strippedS[p2]:
            return False
        if p1 == p2:
            return True
        p2 -= 1
    return False


def pythonicIsPalindrome(s: str) -> bool:
    # Time: O(n)
    s = "".join(c.lower() for c in s if c.isalnum())
    return s == s[::-1]
