# Given the root of a binary tree, invert the tree, and return its root.

# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def invertTree(root: Optional[TreeNode]) -> Optional[TreeNode]:
    # Time: O(n)
    if root is None:
        return None
    temp = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    invertTree(root.right)
    return root
