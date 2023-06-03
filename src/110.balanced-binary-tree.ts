function getHeight(root: TreeNode | null): number {
  if (root == null) return 0;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}
function isBalanced(root: TreeNode | null): boolean {
  // O(n^2)
  if (root === null) return true;
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) return false;
  else return isBalanced(root.left) && isBalanced(root.right);
}
