`Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node
down to the farthest leaf node.`;

function maxDepth(root: TreeNode | null): number {
  // O(n)
  return root === null
    ? 0
    : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
