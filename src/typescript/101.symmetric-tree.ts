`Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around
its center).`;

function checkSymmetry(left: TreeNode | null, right: TreeNode | null): boolean {
  if (!left && !right) return true;
  if (!left || !right || left.val !== right.val) return false;
  return (
    checkSymmetry(left.left, right.right) &&
    checkSymmetry(left.right, right.left)
  );
}

function isSymmetric(root: TreeNode | null): boolean {
  // O(n)
  if (!root) return true;
  return checkSymmetry(root.left, root.right);
}
